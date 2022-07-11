export const truncateContractAddress = ( data ) => {
    const truncStringOne = data.substring(0, 6) + "..." + data.slice(-4)
    return truncStringOne
}

export const commaConvert = (data) => {
    const num = data.toLocaleString("en-US");
    const res = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return res;
}