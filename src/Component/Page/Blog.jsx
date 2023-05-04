import React, { useState } from "react";
import ReactDOM from "react-dom";
import PDF from "react-to-pdf";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const ref = React.createRef();

const Blog = () => {
  const [active, setActive] = useState(true);

  const handlePreveiw = () => {
    setActive(!active);
  };
  return (
    <div className="container mx-auto mt-10">
      {/* Accoridion  */}
      <div>
        <div className="mb-16" ref={ref}>
          <h1 className="text-5xl text-white text-center mb-7 font-bold">
            Blog QNA
          </h1>
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Tell us the differences between uncontrolled and controlled
                  components.
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="text-white font-bold px-10 text-xl">
                Uncontrolled components are not managed by the user or program,
                while controlled components are directly influenced by user
                input or program logic. Controlled components offer greater
                control and consistency, while uncontrolled components may offer
                greater flexibility.
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How to validate React props using PropTypes
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="text-white font-bold px-10 text-xl">
                PropTypes is a utility in React that allows developers to
                validate the types of props passed to a component. To use
                PropTypes, import it from the 'prop-types' package and define
                the expected types for each prop in the component's propTypes
                object
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Tell us the difference between nodejs and express js.
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="text-white font-bold px-10 text-xl">
                Node.js is a server-side JavaScript runtime environment, while
                Express.js is a web framework that runs on top of Node.js.
                Node.js provides the environment to run JavaScript code outside
                of a browser, while Express.js provides a set of tools and
                features to help build web applications and APIs using Node.js.
                In short, Node.js is a runtime environment, while Express.js is
                a framework for building web applications in Node.js.
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is a custom hook, and why will you create a custom hook?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="text-white font-bold px-10 text-xl">
                A custom hook is a JavaScript function that allows you to
                extract and reuse stateful logic from a component. It allows you
                to abstract complex logic into a separate function, which can be
                used across multiple components in your application.You might
                create a custom hook when you find yourself repeating a specific
                pattern of state management or when you want to encapsulate and
                reuse a specific behavior across different components. By
                creating a custom hook, you can keep your components lean and
                focused on their specific responsibilities while maintaining the
                reusability and maintainability of your codebase.{" "}
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {active ? (
        <div className="text-center">
          <button className="btn btn-accent text-white" onClick={handlePreveiw}>
            Preview PDF
          </button>
        </div>
      ) : (
        // PDF Generate
        <div>
          <div className="text-center ">
            <PDF targetRef={ref} filename="Blog.pdf">
              {({ toPdf }) => (
                <>
                  <button
                    className="btn btn-primary text-white"
                    onClick={toPdf}
                  >
                    Generate Blog PDF
                  </button>
                  <button
                    className="btn btn-accent mx-4 my-2 lg:flex-col text-white"
                    onClick={handlePreveiw}
                  >
                    UnPreview PDF
                  </button>
                </>
              )}
            </PDF>
          </div>
          <div
            ref={ref}
            className="bg-white w-1/2 p-3 mx-auto mt-5 rounded-lg shadow-2xl "
          >
            <h1 className="text-3xl mb-3 text-center">
              <strong>Blog QNA</strong>
            </h1>
            <div>
              <h1 className="font-bold text-xl">
                Tell us the differences between uncontrolled and controlled
                components.
              </h1>
              <p>
                <strong>Ans :</strong>
                Uncontrolled components are not managed by the user or program,
                while controlled components are directly influenced by user
                input or program logic. Controlled components offer greater
                control and consistency, while uncontrolled components may offer
                greater flexibility.
              </p>
            </div>
            <br />
            <div>
              <h1 className="font-bold text-xl">
                How to validate React props using PropTypes?
              </h1>
              <p>
                <strong>Ans :</strong>
                PropTypes is a utility in React that allows developers to
                validate the types of props passed to a component. To use
                PropTypes, import it from the 'prop-types' package and define
                the expected types for each prop in the component's propTypes
                object
              </p>
            </div>
            <br />
            <div>
              <h1 className="font-bold text-xl">
                Tell us the difference between nodejs and express js.
              </h1>
              <p>
                <strong>Ans :</strong>
                Node.js is a server-side JavaScript runtime environment, while
                Express.js is a web framework that runs on top of Node.js.
                Node.js provides the environment to run JavaScript code outside
                of a browser, while Express.js provides a set of tools and
                features to help build web applications and APIs using Node.js.
                In short, Node.js is a runtime environment, while Express.js is
                a framework for building web applications in Node.js.
              </p>
            </div>
            <br />
            <div>
              <h1 className="font-bold text-xl">
                What is a custom hook, and why will you create a custom hook?
              </h1>
              <p>
                <strong>Ans :</strong>A custom hook is a JavaScript function
                that allows you to extract and reuse stateful logic from a
                component. It allows you to abstract complex logic into a
                separate function, which can be used across multiple components
                in your application.You might create a custom hook when you find
                yourself repeating a specific pattern of state management or
                when you want to encapsulate and reuse a specific behavior
                across different components. By creating a custom hook, you can
                keep your components lean and focused on their specific
                responsibilities while maintaining the reusability and
                maintainability of your codebase.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

{
  /* <div ref={ref}>
          <h1>BLOG QNA</h1>
          <div>
            <h3>
              1.Tell us the differences between uncontrolled and controlled
              components.
            </h3>
            <p>
              <strong>ANS :</strong>Uncontrolled components are not managed by
              the user or program, while controlled components are directly
              influenced by user input or program logic. Controlled components
              offer greater control and consistency, while uncontrolled
              components may offer greater flexibility.
            </p>

            <h3>2.How to validate React props using PropTypes</h3>
            <p>
              <strong>ANS :</strong>PropTypes is a utility in React that allows
              developers to validate the types of props passed to a component.
              To use PropTypes, import it from the 'prop-types' package and
              define the expected types for each prop in the component's
              propTypes object
            </p>

            <h3>3.Tell us the difference between nodejs and express js. </h3>
            <p>
              <strong>ANS :</strong>Node.js is a server-side JavaScript runtime
              environment, while Express.js is a web framework that runs on top
              of Node.js. Node.js provides the environment to run JavaScript
              code outside of a browser, while Express.js provides a set of
              tools and features to help build web applications and APIs using
              Node.js. In short, Node.js is a runtime environment, while
              Express.js is a framework for building web applications in
              Node.js.
            </p>

            <h3>
              4.What is a custom hook, and why will you create a custom hook?
            </h3>
            <p>
              <strong>ANS :</strong>A custom hook is a JavaScript function that
              allows you to extract and reuse stateful logic from a component.
              It allows you to abstract complex logic into a separate function,
              which can be used across multiple components in your application.
            </p>
          </div>
        </div> */
}
