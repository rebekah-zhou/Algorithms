/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote === "" || magazine === "") return ransomNote === magazine
    
    const magazineHash = {}
    
    for (let i = 0; i < magazine.length; i++) {
        magazineHash[magazine[i]] = ++magazineHash[magazine[i]] || 1
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazineHash[ransomNote[i]]) {
            --magazineHash[ransomNote[i]]
        } else return false
    }
    
    return true
    
};