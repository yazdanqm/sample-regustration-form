const useEmailValidator = (email) => {
    let regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    return regex.test(email)
}
export default useEmailValidator