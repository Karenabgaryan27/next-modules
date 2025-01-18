import React from "react";

const Polygon = () => {
  return (
    <main>
      <section>
        <div className="container">
          <h2 className="text-4xl">Polygon</h2>
          <br />
          <br />
          
          <article className="mb-[200px]">
            <h2 className="text-2xl">.env</h2>
            <br />
            <strong>Secret Message: </strong>
            {process.env.SECRETMESSAGE}
          </article>
          <hr />
        </div>
      </section>
    </main>
  );
};

export default Polygon;
