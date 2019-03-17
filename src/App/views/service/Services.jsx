import React from "react";

export default (props) => {
  const { services } = props;

  return (
    <div>
      {services ? (
        <div>    
          <table>
            <thead>
              <tr>
                <th>Service</th> 
                <th>Instances</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) =>
                <tr key={service._id}><td>{service.name}</td><td>{service.instances.length}</td></tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Nothing to show.</div>
      )}
    </div>
  );
}