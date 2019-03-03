import { EventEmitter } from "events"

// client interface 1
import { mix } from "../"
function classMixinProducesUsingFunctionOnSuperclass({
    Superclass = EventEmitter,
    mixinArray = [/*commonMethod*/],
}) {
    return class X extends mix(Superclass).with(...mixinArray) {}
}

// client interface 2
import { decorator as applyMixin } from "../"
function classMixinProducesUsingFunctionDecorator({
    Superclass = EventEmitter,
    mixin,
}) {
    return 
        @applyMixin({ mixin }) 
        class X extends Superclass {}
}
