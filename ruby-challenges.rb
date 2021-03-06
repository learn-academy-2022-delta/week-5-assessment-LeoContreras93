# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# letter_o = 'o'
# Expected output: ['coffee', 'soda water']
# letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# def return_word array, string
#     array.select do |value|
#         value.include?(string)
#         end
#     end
#     p return_word(beverages_array, letter_o)
#     p return_word(beverages_array, letter_t) 





# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

# nums_array1 = [42, 7, 27]
# # Expected output: 76

# nums_array2 = [25, 17, 47, 11]
# # Expected output: 100

# def sum_of_numbers array
#     return array.sum()
# end
# p sum_of_numbers(nums_array1)
# p sum_of_numbers(nums_array2)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.


# class Bike
#     attr_accessor :model, :wheels, :current_speed
#     def initialize(model)
#         @model=model
#         @wheels = 2
#         @current_speed = 0
#     end
#     def bike_info 
#         "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph." 
#     end
# end
# bike_type=Bike.new('Mongoose')
# p bike.bike_info
# "The Mongoose bike has 2 wheels and is going 0 mph."


# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -----------------------------------------------------------------------------

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

class Bike
    attr_accessor :model, :wheels, :current_speed, :brake
    def initialize(current_speed, brake)
        @model= 'Mongoose'
        @wheels = 2
        @current_speed = 0
        @brake = 0
    end
    def pedal_faster(num)
        @current_speed = num + current_speed
    end
    def brake_pedal(num)
        @brake = num 
    end
end
my_bike = Bike.new(0, 0)
p my_bike.pedal_faster(15)

my_bike = Bike.new(0, 0)
p my_bike.brake_pedal(5)








# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# create two other seperate classes that extend from the original class bike?
   

