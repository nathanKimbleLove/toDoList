-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS "users" CASCADE;

CREATE TABLE IF NOT EXISTS users (
  "id" SERIAL NOT NULL,
  "hash" VARCHAR DEFAULT NULL,
  "email" VARCHAR DEFAULT NULL UNIQUE,
  "username" VARCHAR NOT NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Table 'tasks'
--
-- ---

DROP TABLE IF EXISTS "tasks";

CREATE TABLE IF NOT EXISTS tasks (
  "id" SERIAL NOT NULL,
  "user_id" INTEGER NOT NULL DEFAULT NULL,
  "title" VARCHAR DEFAULT NULL,
  "description" VARCHAR NULL DEFAULT NULL,
  "due" TIMESTAMP NULL DEFAULT NULL,
  "modified" TIMESTAMP NULL DEFAULT NULL,
  "priority" INTEGER DEFAULT NULL,
  PRIMARY KEY ("id")
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE "tasks" ADD FOREIGN KEY (user_id) REFERENCES "users" ("id");

-- INSERT INTO "users` (`id`,`hash`,`email`,`username`) VALUES
-- ('','','','');
-- INSERT INTO `tasks` (`id`,`user_id`,`title`,`description`,`due`, 'modified', 'priority') VALUES
-- ('','','','','','','');