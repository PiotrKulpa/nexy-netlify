import React from 'react';

const Contact = ({ testData}) => {
    return (
        <div style={{margin: '55px'}}>
            <p>Contact { testData }</p>
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label>Your Nameee: { testData }<input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Messageeee: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    )
}

export async function getServerSideProps(context) {
  return {
    props: {
      testData: 'Data served by server side'
    }, // will be passed to the page component as props
  }
}

export default Contact;