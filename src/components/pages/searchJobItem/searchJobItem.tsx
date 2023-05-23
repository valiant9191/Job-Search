

function SearchJobItem({ id }: { id: string }) {


    return (
        <div>
            searchJobItem page ${id}

            <div>
                <h2>title of vacancy</h2>
                <h5><b>offer</b></h5> <span>.</span><h6>additional prop</h6>
                <div>
                    svg of location
                    <p>location</p>
                </div>
            </div>
            <div className="separator" />
            <div>
                main part full description
            </div>
        </div>
    )
}
export { SearchJobItem };