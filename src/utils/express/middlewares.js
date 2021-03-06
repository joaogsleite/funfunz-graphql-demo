
import Joi from '@hapi/joi'

export { meAlias, isAuth, isAdmin } from './auth'
import { InternalServerError, InputError } from './errors'
import { getPathFromObj } from '../index'

import { RouteFunction } from 'utils/types'

/**
 * Runs a controller function with arguments from req object
 * @param {Function} func 
 * @param {String[]} args 
 * @returns {RouteFunction}
 */
export function runController(func, args) {
  return (req, res, next) => {
    Promise.resolve().then(() => {
      return func(...args.map((arg) => getPathFromObj(arg, req)))
    }).then((data) => {
      res.json(data)
    }).catch((error) => {
      if (error.isHttpError) {
        next(error)
      } else {
        next(new InternalServerError({ error }))
      }
    })
  }
}

/**
 * Validates {path} on {req} object with provided {schema}
 * @param {String} path 
 * @param {Joi} schema 
 * @returns {RouteFunction}
 */
export function validate(path, schema) {
  return (req, res, next) => {
    const objToValidate = getPathFromObj(path, req)
    Joi.validate(objToValidate, schema).then(() => {
      next()
    }).catch((error) => {
      next(new InputError({ error }))
    })
  }
}


export function errorHandler (error, req, res, next) {
  const statusCode = error.statusCode
  delete error.isHttpError
  delete error.statusCode
  if (process.env.NODE_ENV !== 'development') {
    error.details = error.details.filter((detail) => {
      return detail.code !== -1 && detail.type !== 'RawError'
    })
  } 
  res.status(statusCode).json(error)
}
