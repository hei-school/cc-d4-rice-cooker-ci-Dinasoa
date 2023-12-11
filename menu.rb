# frozen_string_literal: true

require_relative 'rice_cooker'

class Menu
  def user_prompt(rice_cooker)
    puts 'RICE COOKER:'
    puts "1- Plug in\n2- Unplug\n3- Turn on\n4- Turn off\n5- Add rice\n6- Add water\n7- Show status\n8- Quit"
    user_choice = gets.chomp

    case user_choice
    when '1'
      rice_cooker.plug
    when '2'
      rice_cooker.unplug
    when '3'
      rice_cooker.turn_on
    when '4'
      rice_cooker.turn_off
    when '5'
      rice_cooker.add_rice
    when '6'
      rice_cooker.add_water
    when '7'
      rice_cooker.show_status
    when '8'
      return
    else
      puts 'Invalid choice. Please enter a number between 1 and 8.'
    end

    user_prompt(rice_cooker) unless user_choice == '8'
  end
end
