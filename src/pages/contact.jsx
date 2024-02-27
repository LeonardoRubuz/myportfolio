function Contact() {
    return ( 
        <form action="">
            <div className="form-group">
                <input type="text" name="" id="" placeholder="e.g: John Doe" />
                <input type="email" name="" id="" placeholder="johndoe@example.com" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Enter a message"></textarea>
            <button type="submit">Send message</button>
        </form>
     );
}

export default Contact;