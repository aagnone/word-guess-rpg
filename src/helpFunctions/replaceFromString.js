const replaceFromString = (arr, str) => {
    let regex = new RegExp("\\b"+arr.join('|')+"\\b","gi")
    return str.replace(regex, '_____')
}

export default replaceFromString