# rock-paper-scissors
Third version of a Rock Paper Scissors project by using JavaScript and HTML+CSS. Hopefully this is the final version.

An improved GUI has already been implemented and the game allows the player to play 5 rounds. Whenever the player or the computer wins 5 rounds, the game resets all counters and a new game starts.

This is an exercise from The Odin Project.

CREDITS:
Icons by Cuputo: https://www.flaticon.com/packs/hand-gesture-and-finger-action-1

DONE:
- Styles:
    · Create a "blank space" to show the computer's choice. This could be an inverted icon to simulate that the placer is facing the computer.
    · Change the way the game indicates which option the computer chooses.
    An idea for this would be to toggle visibility and change the icon of the computer's choice.
    · Add borders to the game elements
    · Change button styles. Use hand icons.
    · Add an inverted icon in computer's button.
    · Add a colorful style
    · Soften button transitions

- Game:
        Add a <p> that indicates the result of the round.

FIXED BUGS:

- Whenever the player or the computer win 5 rounds, the game prompts to play again, but the winner counter stays at 4 and won't update to 5.
Also, the buttons won't update to the win/defeat styles.
This has been debugged and works fine, although I haven't found a workaround to visibly update the winner's counter.