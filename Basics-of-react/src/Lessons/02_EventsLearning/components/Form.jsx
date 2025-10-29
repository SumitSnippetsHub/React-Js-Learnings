function handleSubmitForm(event) {
    event.preventDefault();
    console.log("form submitted");
};

export default function Form() {
    return (
        <>
            <p>This is Event Object</p>
            <form onSubmit={handleSubmitForm}>
                <button>submit form</button>
            </form>
        </>
    );
};