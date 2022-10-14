import React from 'react';
import { Table } from 'reactstrap';

const Table1 = () => {
      return (
        <>
        <form action="/action_page.php">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"></input>
        </form>
        <Table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Answer</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <button>
            Download Excel
        </button>
        </>
      );
    }

export default Table1;