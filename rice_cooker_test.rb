# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'rice_cooker'

class TestRiceCooker < Minitest::Test
  def setup
    @rice_cooker = RiceCooker.new
  end

  def test_should_plug_the_rice_cooker
    @rice_cooker.plug
    assert_equal true, @rice_cooker.instance_variable_get(:@is_plugged)
  end

  def test_should_unplug_the_rice_cooker
    @rice_cooker.instance_variable_set(:@is_plugged, true)
    @rice_cooker.unplug
    assert_equal false, @rice_cooker.instance_variable_get(:@is_plugged)
  end

  def test_should_turn_on_rice_cooker
    @rice_cooker.instance_variable_set(:@is_plugged, true)
    @rice_cooker.instance_variable_set(:@rice_inserted, true)
    @rice_cooker.instance_variable_set(:@water_inserted, true)

    @rice_cooker.turn_on
    assert_equal true, @rice_cooker.instance_variable_get(:@power_on)
  end

  def test_should_turn_off_rice_cooker
    @rice_cooker.instance_variable_set(:@power_on, true)

    @rice_cooker.turn_off

    assert_equal false, @rice_cooker.instance_variable_get(:@power_on)
  end

  def test_should_add_rice
    input = "50\n"
    $stdin = StringIO.new(input)

    @rice_cooker.add_rice
    assert_equal 50, @rice_cooker.instance_variable_get(:@rice_quantity)
  end

  def test_should_add_water
    input = "100\n"
    $stdin = StringIO.new(input)

    @rice_cooker.add_water
    assert_equal 100, @rice_cooker.instance_variable_get(:@water_quantity)
  end
end
