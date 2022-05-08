# Game to be Named

This project is going to eventually be a wordle clone rpg. 

## Project Steps

### First the Clone

The starting meat of the project. Figure out how wordle does what it does and get it out there. Pick word. Let them guess. Reveal letters. Etc. Keypad for familiarity sake.

### Then Determine Data Storage

Should it be cookie/browser session based (almost certainly no). I'm thinking mongoDB/AWS for this one, however Firebase isn't a terrible option. I've just used it too many times lately and I'm bored with it. 

### Track The User

IP address? Create an account? Google/Facebook/Git/whatever oAuth?

### Determine How Many Plays per Day

Since this is an rpg focused on progression, once per day doesn't seem enough. But with infinite plays maybe takes away the excitement, and makes it too easy. Starting thinking 2 or 3. Maybe even just start off with 1. 

### RPG Elements

Experience per word guess based on how many turns it takes you. Powerups that help you with puzzles, maybe gains you more experience, gets you refresh words. More guesses. Reveals. Whatever. 

## Point?

Is this story line driven? Is the point to maybe play more per day if you want resulting in eventual infinite plays? Or maybe
a storyline? What's the point of all this. If it's a storyline...should it be silly? Serious? How to keep it infinite. Or, is there an "end game" and then you can enter infinite mode/challenge mode/what have you. Maybe the story line is something like...a future archeologist/excavator trying to decipher something about current day? Would
guessing soccer moms passwords to unlock computers be too stupid/problematic? Maybe filling in words from a future find of a now ancient NY Times article. Who knows. Part of me likes the idea of some kind of...hacking? Or something situation. The game should start off hard and maybe partial experience points are awarded even if you fail, based on the number of characters you guess.

# Setup

## Install Node

### [https://nodejs.org/en/download/] (Install Node)

## Install Yarn 

### [https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable](Install Yarn)

## Clone Repo

### `git clone https://github.com/aagnone/word-guess-rpg.git`

## Install Dependencies

### `yarn`

## Install Json-Server globally

### `npm install -g json-server`

## Start Json-Server

### `json server ./data/db.json --port 3001`

## Start project

## `yarn start`