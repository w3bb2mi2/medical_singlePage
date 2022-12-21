



export const selectAns = () => document.querySelectorAll(".list-group-item").forEach(el => {
    el.addEventListener("click", function (e) {
        let input = e.currentTarget.querySelector("input")
        if (input?.type == "radio") {
            input.closest("ul").querySelectorAll("input").forEach(el => {
                el.checked = false
            })
            input.checked = false
            el.querySelectorAll("input").forEach(input => {
                input.disabled = true;
            })
            try {
                this.querySelector("input").checked = true
                this.querySelector("input").disabled = false
            } catch (error) {

            }


        }
        
    })

})
