import fs from 'fs'
import {suggest} from './suggest.js'
import prmt from 'prompt-sync'
const prompt = prmt()

let string = prompt('Enter a string: ')
let index = 0 //index of the first letter of the word that is misspelled in the full text saved as 0 for now

export const dictionary = fs.readFileSync('ospd.txt', 'utf8').split('\n')

function driver(string){
    if(dictionary.includes(string)){
        console.log('No typos found')
        return //or can call a function to send next word suggestions (in case of no typos)
    } else{
        //underline(index) //index is the index of the first letter of the word that is misspelled in the full text
        let suggestions = suggest.editDistance(string)
        if(suggestions.length == 0){
            return //or can call a function to send next word suggestions (in case of no typos)
        } else{
            //send suggestions to the user
            //print suggestions to the console for now
            console.log('Suggestions: ')
            for(let i = 0; i < suggestions.length; i++){
                console.log(suggestions[i])
            }
        }
    }
}
driver(string)