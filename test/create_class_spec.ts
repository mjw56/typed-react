/// <reference path="../typings/mocha/mocha.d.ts" />
import chai = require("chai");
import TypedReact = require("../src/index");
import React = require("react/addons");

var expect = chai.expect;

interface FactoryProps {
    name: string;
}

interface FactoryState {
}

class FactoryTest extends TypedReact.Component<FactoryProps, FactoryState> {
    render() {
        return React.DOM.h1(null, "Greetings", name);
    }
}

describe("createFactory", () => {
    var clazz: React.ReactComponentFactory<FactoryProps>;
    var factory: React.ReactComponentFactory<FactoryProps>;
    var descriptor: React.ReactComponentElement<FactoryProps>;
    var name = "test";

    beforeEach(() => {
        clazz = TypedReact.createClass<FactoryProps, FactoryState>(React.createClass, FactoryTest);
        factory = React.createFactory(clazz);
        descriptor = factory({
            name: name
        });
    });

    it("should produce a valid descriptor", () => {
        expect(React.isValidElement(descriptor)).to.be.true;
        expect(descriptor.props.name).to.equal(name);
    });
});