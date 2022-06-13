import React from "react";

function DisplayUserData(props) {
  return (
    <div>

      <div className="mt-5 ps-5 pe-5">
          <h1 className="text-center">Details of Users</h1>
        <table className="table table-success table-stripped">
          <thead>
            <tr >
              <th >First Name</th>
              <th>Last Name</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody className="table-group-divider">
            {props.dataFromChild.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayUserData;
