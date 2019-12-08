# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|nickname|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|password|string|null: false, foreign_key: true|

### Association
- has_many :groups,through: :users_groups
- has_many :users_groups
- has_many :comments,through: :users_comments
- has_many :users_comments


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|group_name|string|null: false, foreign_key: true|

### Association
- has_many :comments,through: :groups_comments
- has_many :groups_comments
- has_many :users,through: :users_groups
- has_many :users_groups


## commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|text||
|image|string||

### Association
- belongs_to :groups
- belongs_to :users


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users


## groups_commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|comments_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :comments


## users_commentsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|users_id|integer|null: false, foreign_key: true|
|comments_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :groups
- belongs_to :users