import { Link } from 'react-router-dom'
import '../Style/Landing.css'

const Landing = () => {

//    let boxes = Array.from({length:2500})

    return (
        <div className="landing">
            <div className="landingtext">
                <h1>
                Start your <span>online</span> business today for free
                </h1>
            </div>

            <div className='linkitem'>
                <Link to='/Adminlogin' className='link'>

                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACUCAMAAADbGilTAAAAP1BMVEX///+ZmZmWlpba2tqTk5Pw8PCQkJCNjY3h4eHt7e2cnJz6+vrCwsLMzMympqagoKC5ubnn5+esrKzS0tKysrLNOisSAAAFw0lEQVR4nO1ca7ejIAwsEb0o+EL//29dH+1ua32MIdres87He87FKZCQhCG324ULFy5cuHDhwv8KG6d1bUbUdRrbTxOah62jvGp9mZEeQVnp2ypv6i8jHOdtqRQRKVJKZZnqQf0fuj+VbR5/muAdsanUT0JqGZT8KGc+z9c4r/UKzwe09s58lGnku3UGmA6zS8pH3f98ZPvGjV5d+hkkuvnEVrB5kewjOkCX+ekT2xTw4r+CqIhOZVqXe1f/mW1SpqcxtY45p//m1p20EeoijOlAtqhPYGpzHUy1h84Ppxq3iOeHyFYHu6/US1HtyPpDTcxkIut/B2UHnrpRoP2/kaXDXG2kZKn2bJtjqDbiTA8j28hZ1TOSA8hGx1BVpMUNTNYDvJCV9gZpCVPtcsMuy9K4yyDRUMbe0BBAJ1mbN1EUNXmbobGYLgS53pzOoBnSrbGPCMpa04KhQ+LkqGIugJSbnvCxw1yyFnMG2Gbt5nT6j90UG49kOnJb1iNUk4Xw2bof6IfKUG2Qj1G+mE3nyE/9EdkFKWRWa5EzQlZmFzjgS3rdkB1gmyTgCwwyKVsOEnHPFH58IYZFW4lejayND6VaA4a1sQN6OMBzJaGpLTKt5fZHEBe9uZM2gGQtVAEDVchWCspoLPIJhbhGJKmAfvQiasi3IvUeiwykQnZsDpgEuM0QtwUY6SIsMq3gykEbNuOX5KIEIAsWppAlUgnfuqDaFZiINlBsyA63oC2AzkUEVezZmyCCYnrJeeW7WMi5wvsVy4OYLjaG8gFJP9AN5nlF2RosX4D+FRpLZbzjACxgkUKmIsaocjNaJJrvZwIq9aFFRt7RZVtweGoBRyM62DtXbPAOQPHM4INxuMZwERPwBBU8mOY4AoNfDW9mHwYv3iacFBE7aAbQRghrd1w0sOrcoBsYoKs1srbCyozjUBxHgFrugNVKhCOFc2WFWvtuiHW1WM/C7Wrgyslmyz1f6MnOF6Tidqd8o2RwxZdtxLzeotl9gZ+dwLUvok40brb2+y/wz+GqKCma+iEijOvGc5QmJ3Htb4Mz3zqXO1f5jCeKOI3ryHfUETJxKtdAcLju9FlEOvl5Q5LsuEAcwfFZe5xNf6fpXWPS+AVpahrnFSSO/DsU5yzAz1hS3q0pcuu8szN4MM4Zi8YuWjmzFR9b4xQ6HCfrBosPtHC2TtnGFebCWDFhjdQzaYduKcXuHzmxdrq9aJTtEojaHODKymG2c8P9igpE3cHKY7eWjIr9w9pNT+hZlcINR6BZpad4wxUyy/DrJU0qeFWyeH1mNa+ouX4JQ9yqrl09dJm1t/WaJv+m16xk4Nya5lrJlEKUtit6AvZ1XLQ8JKtC9sBKVY9dg1++29BhIoqVY4Y9B0u/nxVfPGOpZMC/M7qZBfEAhSqtl6rcrGBgxMImEJCmLJwzZYAZzF/0CAgr52vHIXfH88cB8Y7sF8wHG8yD4D7knIuVUCfNbgJarYxuYs7FbqqGENRzXANV8XORhgDVueiYQkVP75lMqNznjvdJCNY8vYuegoz1H942bPC0zmj0hET2b2mygEbvTfsYcLY8Y3olJeJd0kk+l8hIgNMJVxll8USrewxXGa3u1LzEuD6fiQKGdR+2PJqr4HOIF9XDEVzlNPuv8tVE5plg/MRVyGXf8XTKUP+EJBxPCaLQSfjAi9aWRPC0WYXfyprDrjoOeCF52FszibN1ih3ahz1UJV3AE9kDXsYRJKD+DrK/54EsMSuYEH7RG+n+LkXOwg5+e/6r3vQPvRJkqB7fK+E29KAI3rX6lB4UN4neHuqs3h63PpQJMbEze6b0+D29aG5Djx+Okeni/B4/t77B197eSfSh3kkDIo9KGNQg3zgoUMFgjSsI6/VVfLjXVw+sh1r1BT3URqRDbzqlJxKyIa3Kvqg33R33nn/FtOdf9G09/x4YeylGkYm+upfiiK8md+HChQsXLlz4/fgD9wRFgElpJRMAAAAASUVORK5CYII=" alt="img" />
                    <h3>Admin</h3>
                </Link>
                <Link to='/Userlogin' className='link'>
                    <img src="data:image/png;base64,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" alt="user image" />
                    <h3>User</h3>
                </Link>
            </div>

            {/* <div className="container">
              {
                boxes.map((_id, box)=>
                (
                    <div key={_id} className="box"></div>
                )
                )
              }
            </div> */}
        </div>
    );
}

export default Landing;