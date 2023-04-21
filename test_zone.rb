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