import React from 'react';

const Contact = () => {
    return (
        <div style={{margin: '55px'}}>
            <p>Contact</p>
            <form name="contact" method="POST" data-netlify="true">
                <p>
                    <label>Your Nameee: <input type="text" name="name" /></label>
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

export default Contact;