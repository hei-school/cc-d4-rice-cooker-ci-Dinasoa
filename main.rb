class RiceCooker
    def initialize
      @is_plugged = false
      @power_on = false
      @rice_inserted = false
      @water_inserted = false
      @rice_quantity = 0
      @water_quantity = 0
      @capacity = 900
    end
  
    def plug
      if @is_plugged
        puts "Rice Cooker is already plugged in."
      else
        @is_plugged = true
        puts "Rice Cooker plugged in."
      end
    end
  
    def unplug
      if !@is_plugged
        puts "The rice cooker is already unplugged."
      else
        @is_plugged = false
        puts "The rice cooker has been unplugged."
      end
    end
  
    def turn_on
      if @power_on
        puts "The Rice Cooker is already on."
      elsif !@is_plugged
        puts "The rice cooker should be plugged before turning on."
      elsif !@rice_inserted
        puts "You should insert rice."
      elsif !@water_inserted
        puts "You should insert water."
      else
        @power_on = true
        puts "Rice Cooker turned on, start cooking."
      end
    end
  
    def turn_off
      if !@power_on
        puts "The Rice Cooker is already off."
      else
        @power_on = false
        puts "Rice Cooker turned off."
      end
    end
  
    def add_rice
      if @rice_inserted
        puts "Rice is already present."
      else
        print "Rice quantity: "
        quantity_str = gets.chomp
        quantity = quantity_str.to_i
  
        if @water_inserted
          if quantity <= @water_quantity && quantity + @rice_quantity <= @capacity
            @rice_quantity = quantity
            @rice_inserted = true
            puts "Rice has been added."
          else
            puts "Not enough space or insufficient water quantity."
          end
        else
          if quantity <= @capacity
            @rice_quantity = quantity
            @rice_inserted = true
            puts "Rice has been added."
          else
            puts "Not enough space."
          end
        end
      end
    end
  
    def add_water
      if @water_inserted
        puts "Water is already present."
      else
        print "Water quantity: "
        quantity_str = gets.chomp
        quantity = quantity_str.to_i
  
        if @rice_inserted
          if quantity <= @capacity - @rice_quantity && quantity <= @capacity
            @water_quantity = quantity
            @water_inserted = true
            puts "Water has been added."
          else
            puts "Not enough space or insufficient capacity for water with current rice quantity."
          end
        else
          if quantity <= @capacity
            @water_quantity = quantity
            @water_inserted = true
            puts "Water has been added."
          else
            puts "Not enough space."
          end
        end
      end
    end
  
    def get_status
      if @is_plugged
        puts "Plugged."
      else
        puts "Unplugged."
      end
  
      if @power_on
        puts "ON."
      else
        puts "OFF."
      end
  
      if @rice_inserted
        puts "Rice inserted: #{@rice_quantity}"
      end
  
      if @water_inserted
        puts "Water inserted: #{@water_quantity}"
      end
    end
  end
  
  def main
    quit = false
  
    until quit
      puts "Is the electricity cut off? (1 for Yes, 2 for No)"
      puts "1- Yes"
      puts "2- No"
      electricity = gets.chomp
  
      case electricity
      when "1"
        puts "Mandreta afo na gaz fa tsy poinsa leh rice cooker vo tsisy jiro."
        quit = true
      when "2"
        user_prompt
      else
        puts "Choose a valid choice."
      end
    end
  end
  
  def user_prompt
    rice_cooker = RiceCooker.new
    user_choice = ""
  
    until user_choice == "8"
      puts <<~MENU
        RICE COOKER:
        1- Plug in
        2- Unplug
        3- Turn on
        4- Turn off
        5- Add rice
        6- Add water
        7- Show status
        8- Quit
      MENU
  
      user_choice = gets.chomp.strip  # Ajout de .strip pour supprimer les espaces et les caractères de nouvelle ligne
  
      case user_choice
      when "1"
        rice_cooker.plug
      when "2"
        rice_cooker.unplug
      when "3"
        rice_cooker.turn_on
      when "4"
        rice_cooker.turn_off
      when "5"
        rice_cooker.add_rice
      when "6"
        rice_cooker.add_water
      when "7"
        rice_cooker.get_status
      when "8"
        break
      else
        puts "Invalid choice. Please enter a number between 1 and 8."
      end
    end
  end
  
  
  main
  