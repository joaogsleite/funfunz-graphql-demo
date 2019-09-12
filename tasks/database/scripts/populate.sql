
/* clean database */
DELETE FROM tagpost;
DELETE FROM tags;
DELETE FROM posts;
DELETE FROM users;



/* insert users */
INSERT INTO users
(id, name, email, password, createdAt, updatedAt)
VALUES
(1, 'Joao Leite', 'joao.leite@isobar.com', 'password', NOW(), NOW());

INSERT INTO users
(id, name, email, password, createdAt, updatedAt)
VALUES
(2, 'Joao Moura', 'joao.moura@isobar.com', 'password', NOW(), NOW());



/* insert posts */
INSERT INTO posts
(id, title, createdAt, updatedAt, ownerId)
VALUES
(1, 'New iPhone released yesterday', NOW(), NOW(), 1);

INSERT INTO posts
(id, title, createdAt, updatedAt, ownerId)
VALUES
(2, 'Animals in extinction', NOW(), NOW(), 1);



/* insert tags */
INSERT INTO tags
(id, name, createdAt, updatedAt)
VALUES
(1, 'trending', NOW(), NOW());

INSERT INTO tags
(id, name, createdAt, updatedAt)
VALUES
(2, 'technology', NOW(), NOW());

INSERT INTO tags
(id, name, createdAt, updatedAt)
VALUES
(3, 'mobile', NOW(), NOW());

INSERT INTO tags
(id, name, createdAt, updatedAt)
VALUES
(4, 'nature', NOW(), NOW());



/* tagpost relation */
INSERT INTO tagpost
(tagId, postId, createdAt, updatedAt)
VALUES
(1, 1, NOW(), NOW());

INSERT INTO tagpost
(tagId, postId, createdAt, updatedAt)
VALUES
(1, 2, NOW(), NOW());

INSERT INTO tagpost
(tagId, postId, createdAt, updatedAt)
VALUES
(2, 1, NOW(), NOW());

INSERT INTO tagpost
(tagId, postId, createdAt, updatedAt)
VALUES
(3, 1, NOW(), NOW());

INSERT INTO tagpost
(tagId, postId, createdAt, updatedAt)
VALUES
(4, 2, NOW(), NOW());
