import React from "react";

const Polygon = () => {
  return (
    <main>
      <section>
        <div className="container">
          <h2 className="text-4xl">Polygon</h2>
          <br />
          <br />
          <strong>Secret Message: </strong>
          {process.env.SECRETMESSAGE}
        </div>
      </section>
    </main>
  );
};

export default Polygon;
