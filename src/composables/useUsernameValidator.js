const useUsernameValidator = (username) => {
    let regex = /^[a-zA-Z_]{4,29}$/
    return regex.test(username)
}
export default useUsernameValidator