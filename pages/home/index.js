function updateArrayJson() {
    const checkJson = localStorage.getItem("selectedJobs")

    if (checkJson) {
        const arrUpdated = JSON.parse(checkJson)

        if (arrUpdated.length > 0) {
            arraySelected = [...arrUpdated]            
        }
    }
}

updateArrayJson()

