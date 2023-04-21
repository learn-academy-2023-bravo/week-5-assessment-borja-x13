# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def letter_checker (array, string)
    array.select do |value| 
        value.include? string
    end
end

p letter_checker(beverages_array, letter_o) #["coffee", "soda water"]
p letter_checker(beverages_array, letter_t) #["tea", "water", "soda water"]


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# pseudo:
# what's needed: A method to take a hash and unpack it. Takes an array as argument
# research 2d array, can I use flatten? ref: https://apidock.com/ruby/Array/flatten
    # flatten works but gives me the keys as well as the values... flatten can take an argument. flatten(value?)
    # Am I trying to flatten the hashes not the array... or both
    # try array.values or hash.values ref: https://docs.ruby-lang.org/en/master/Hash.html#class-Hash-label-Methods+for+Converting
# after unpacking sort alphabetically with .sort()
# input: array of hashes
# output: one dimentional array

def crush_the_hash (hash)
    hash.values.flatten.sort    
end

p crush_the_hash(us_states) # ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


class Bike 
    attr_accessor :model, :wheels, :current_speed

    def initialize model
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going at #{@current_speed} mph."
    end

    def pedal_faster new_speed
        @current_speed += new_speed
        "You are now going #{@current_speed} mph."     
    end

    def brake new_speed
        @current_speed = [@current_speed - new_speed, 0].max
        "You are now going #{@current_speed} mph." 
    end
end

trek_bike = Bike.new ('Trek')

p trek_bike.bike_info # "The Trek bike has 2 wheels and is going at 0 mph."
p trek_bike.pedal_faster(10) # "You are now going 10 mph."
p trek_bike.pedal_faster(18) # "You are now going 28 mph."
p trek_bike.brake(5) # "You are now going 23 mph."
p trek_bike.brake(25) # "You are now going 0 mph."
