import { dictionary } from './index.js'
export const suggest = {
    editDistance: (string) => {
        let suggestions = []
        for(let i = 0; i < dictionary.length; i++){
            let distance = suggest.editDistancePerWord(string, dictionary[i])
            if(distance <= 2){
                suggestions.push(dictionary[i])
            }
        }
        return suggestions
    },
    editDistancePerWord: (string, word) => {
        let n = string.length
        let m = word.length
        let matrix = []
        for(let i = 0; i <= n; i++){
            matrix[i] = []
            for(let j = 0; j <= m; j++){
                matrix[i][j] = 0
            }
        }
        for(let i = 0; i <= n; i++){
            matrix[i][0] = i
        }
        for(let j = 0; j <= m; j++){
            matrix[0][j] = j
        }
        for(let j = 1; j <= m; j++){
            for(let i = 1; i <= n; i++){
                if(string[i - 1] == word[j - 1]){
                    matrix[i][j] = matrix[i - 1][j - 1]
                } else{
                    matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + 1)
                }
            }
        }
        return matrix[n][m]
    }
}

// // function editDistance(string){
// //     let suggestions = []
// //     for(let i = 0; i < dictionary.length; i++){
// //         let distance = wagnerFischer(string, dictionary[i])
// //         if(distance <= 2){
// //             suggestions.push(dictionary[i])
// //         }
// //     }
// //     return suggestions
// // }

// function wagnerFischer(string, word){
//     let n = string.length
//     let m = word.length
//     let matrix = []
//     for(let i = 0; i <= n; i++){
//         matrix[i] = []
//         for(let j = 0; j <= m; j++){
//             matrix[i][j] = 0
//         }
//     }
//     for(let i = 0; i <= n; i++){
//         matrix[i][0] = i
//     }
//     for(let j = 0; j <= m; j++){
//         matrix[0][j] = j
//     }
//     for(let j = 1; j <= m; j++){
//         for(let i = 1; i <= n; i++){
//             if(string[i - 1] == word[j - 1]){
//                 matrix[i][j] = matrix[i - 1][j - 1]
//             } else{
//                 matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + 1)
//             }
//         }
//     }
//     return matrix[n][m]
// }