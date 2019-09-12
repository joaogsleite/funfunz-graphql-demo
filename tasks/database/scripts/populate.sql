
INSERT INTO users
(id, name, email, password, createdAt, updatedAt)
VALUES
(1, 'Joao Leite', 'joao.leite@isobar.com', 'password', NOW(), NOW());


INSERT INTO posts
(id, title, createdAt, updatedAt, ownerId)
VALUES
(1, 'Example post', NOW(), NOW(), 1);


INSERT INTO tags
(id, name, createdAt, updatedAt)
VALUES
(1, 'technology', NOW(), NOW());

INSERT INTO tagpost
(tagId, postId, createdAt, updatedAt)
VALUES
(1, 1, NOW(), NOW());
