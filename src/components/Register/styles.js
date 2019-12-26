import styled from "styled-components";

export const Container = styled.div`
         display: flex;
         align-items: center;
         justify-content: center;
         height: 100%;
         margin: 0 auto;
         background: #3f3f3f;
         form {
           background: #fff;
           padding: 10px;
           border-radius: 4px;
           min-width: 320px;
           display: flex;
           flex-direction: column;
           h1 {
             margin-bottom: 10px;
           }
           input {
             border: 1px solid #3f3f3f;
             margin-bottom: 10px;
             height: 30px;
             border-radius: 5px;
             padding: 10px;
           }
           input.error {
             border: 1px solid red;
           }
           .navigation {
             display: flex;
             align-items: center;
             justify-content: space-between;
             button {
               width: 100px;
               border: 1px solid #fff;
               border-radius: 4px;
               padding: 8px;
               font-size: 13px;
             }
           }
         }
       `;
