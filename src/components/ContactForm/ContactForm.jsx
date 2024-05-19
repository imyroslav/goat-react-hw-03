export default function ContactForm() {

    return (
        <form>
            <div>
                <label>Name</label>
                <input type="text" name="name" />
            </div>

            <div>
                <label>Number</label>
                <input type="text" name="number" />
            </div>

            <button>Add contact</button>
        </form>
    )
}