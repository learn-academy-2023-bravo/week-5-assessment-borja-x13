# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Super is used when creating a child class and it is used to reference an attribute that is being inherited from the parent class.

For example:
```rb
# create parent class
class Car
    def initialize (color, transmission, engine_size)
        @color = color
        @transmission = transmission
        @engine_size = engine_size
    end
end

# create child class 
class Supercar < Car
    def initialize (color, transmission, engine_size, max_speed)
        super()
        @max_speed = max_speed
    end
end 
```
In this example the child class inherits the attributes and refers to the methods of the parent class in order to use them in the same way, but can expand beyond the parent class by adding @max_speed attribute

Researched answer: You can also use methods from the parent class by just using super or super(). The first way, super, assumes you are using the same arguments as what the parent class uses, so if you use a different number of arguments it will throw a "wrong number of arguments" error. When you use super() it allows you to pass a different number of arguments than that of the parent class. 

2. What is a gem?

Your answer: A gem is an addon to the Ruby language

Researched answer: Gems are software packages that contain ruby applications to extend or modify ruby functionality. RSpec is a gem as well as Rails. 

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a database in which the tables of the database can have relationships (connections) to one another. So in a video store db (yeah I said Blockbuster) I can have a table of customers and a table of movies. Then I can connect a specific movie as rented out to a specific customer. I know that there are dbs that are not relational but I don't remember their name. Essentially they are data buckets I believe MongoDB is one such non-relational type of db. 

Researched answer: Haha so I guess if they aren't relational they are called non-relational db. Logic for once. NoSQL dbs (as they are also known) do not use tables, rows, columns, keys. Instead they storage of these databases is optimized for the specific usage of the db and the data being stored there. 

4. What are primary keys? Why are they important?

Your answer: Primary Keys are an attribute that make each object (row in a table) be unique. This uniqueness is essential so that we always know what object is being referrenced when querying the db. Without a primary key, if I had a money app db with two Mike Smith people and someone sent money to one, I wouldn't know with certainty which should receive it. By having an account# now I have a primary key that can help me discern who is getting ritcher. 

Researched answer: Something I forgot to say is that a relational db can only have one of a specific primary key. I thought that was inferred when I called it unique, but during my research I saw this repeated. So if the db generates an automatic counter 1...12 for a table, the PK is not just 1...12 but rather the column_name + counter.

account_number  first_name  last_name   phone_number
1               Mike        Smith       867-5309

the PK is account_numer 1 not just 1

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are Get, Post, Put, Patch and Delete. CRUD stands for Create, Read, Update, Delete. Create = post. Read = get. Update = put and patch. Delete = delete.   

Researched answer: There are other methods beyond get, post, patch, put and delete. There are also head, options, trace... The methods we studied are the most commonly used methods. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Model validations are using in rails to ensure that only valid data is being put into the db. This can help prevent attacks such as SQL injection and prevent corrupt/incomplete data and collisions

2. RESTful routes: REST stands for reqpresentational State Transfer. It is a set of standards used for creating efficient and re-usable routes

3. ERB: ERB stands for Embedded Ruby. It is a templating system that embed ruby into html similarly to jsx for JaveScript

4. Params: Params are parameters in rails... mike drop. They allow you to select what parameters to permit or require in order to prevent sensitive or unnecessary data from being expossed

5. API: API stands for Application Programming Interface and it is a roadmap of sorts for connecting applications to one another. 
