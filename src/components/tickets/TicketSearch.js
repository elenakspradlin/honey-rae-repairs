export const TicketSearch = ({ setterFunction }) => {
    return (<div>
        <input
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }

            type="textbox" placeholder="Enter search terms here" />

    </div>
    )
}