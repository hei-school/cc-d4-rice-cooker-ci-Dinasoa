import org.scalatest.funspec.AnyFunSpec
import org.scalatest.matchers.should.Matchers

class RiceCookerSpec extends AnyFunSpec with Matchers {

  describe("A RiceCooker") {

    it("should allow plugging and unplugging") {
      val riceCooker = new RiceCooker
      riceCooker.plug()
      riceCooker.isPlugged shouldBe true

      riceCooker.unplug()
      riceCooker.isPlugged shouldBe false
    }

    it("should allow turning on and off") {
      val riceCooker = new RiceCooker
      riceCooker.plug()
      riceCooker.addRice()
      riceCooker.addWater()

      riceCooker.turnOn()
      riceCooker.powerOn shouldBe true

      riceCooker.turnOff()
      riceCooker.powerOn shouldBe false
    }

}}
