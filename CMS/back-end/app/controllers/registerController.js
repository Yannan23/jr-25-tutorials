export const register = async (req, res) => {
    const result = await suthServiceUser.register(req)
    res.send(result)
}