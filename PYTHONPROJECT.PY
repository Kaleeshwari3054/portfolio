import random
import tkinter as tk
from tkinter import messagebox

class HangmanGame:
    def __init__(self, root):
        self.root = root
        self.root.title("Hangman Game")
        self.root.geometry("400x400")

         # Add a heading at the top of the window
        self.heading_label = tk.Label(root, text="Welcome to word guessing!", font=("Arial", 20, "bold"))
        self.heading_label.pack(pady=10)

        # Dictionary of words 
        self.words_with_hint = {
            'Haskell': 'Programming language',
            'hangman': 'Game',
            'snake': 'Game',
            'ludo': 'Game',
            'chess': 'Strategy game',
            'carrom': 'Board game',
            'programming': 'Activity',
            'developer': 'Occupation',
            'challenge': 'Task',
            'computer': 'Electronic device',
            'apple': 'Fruit',
            'leopard': 'Animal',
            'elephant': 'Animal',
            'soccer': 'Sport'
        }

        # Randomly choose a word 
        self.word_to_guess = random.choice(list(self.words_with_hint.keys()))
        self.hint = self.words_with_hint[self.word_to_guess]
        self.guessed_word = ['_'] * len(self.word_to_guess)
        self.attempts = 6 
        self.guesses = []

        # UI Elements
        self.word_label = tk.Label(root, text=' '.join(self.guessed_word), font=("Arial", 24))
        self.word_label.pack(pady=20)

        self.attempts_label = tk.Label(root, text=f"Attempts left: {self.attempts}", font=("Arial", 14))
        self.attempts_label.pack(pady=10)

        self.guess_entry = tk.Entry(root, font=("Arial", 14))
        self.guess_entry.pack(pady=10)

        self.guess_button = tk.Button(root, text="Guess", font=("Arial", 14), command=self.process_guess)
        self.guess_button.pack(pady=10)

        self.play_again_button = tk.Button(root, text="Play Again", font=("Arial", 14), command=self.play_again)
        self.play_again_button.pack(pady=10)
         # Disabled until game ends
        self.play_again_button.config(state=tk.DISABLED) 

        # Show hint button
        self.hint_button = tk.Button(root, text="Show Hint", font=("Arial", 14), command=self.show_hint)
        self.hint_button.pack(pady=10)

    def process_guess(self):
        guess = self.guess_entry.get().lower()
        self.guess_entry.delete(0, tk.END)

        #  the input
        if len(guess) != 1 or not guess.isalpha():
            messagebox.showwarning("Invalid input", "Please enter only one letter.")
            return

        if guess in self.guesses:
            messagebox.showwarning("Repeated Guess", "You already guessed that letter.")
            return

        self.guesses.append(guess)

        if guess in self.word_to_guess:
            for index, letter in enumerate(self.word_to_guess):
                if letter == guess:
                    self.guessed_word[index] = guess
            self.update_ui()

            if '_' not in self.guessed_word:
                self.game_over(won=True)
        else:
            self.attempts -= 1
            self.attempts_label.config(text=f"Attempts left: {self.attempts}")
            messagebox.showinfo("Incorrect Guess", f"Oops! '{guess}' is the wrong letter. Type another letter.")
            if self.attempts == 0:
                self.game_over(won=False)

    def update_ui(self):
        self.word_label.config(text=' '.join(self.guessed_word))

    def game_over(self, won):
        if won:
            messagebox.showinfo("Congratulations", f"You guessed the word: {self.word_to_guess}")
        else:
            messagebox.showinfo("Game Over", f"Sorry, you ran out of attempts. The word was: {self.word_to_guess}")
        self.guess_button.config(state=tk.DISABLED)
        self.play_again_button.config(state=tk.NORMAL)

    def show_hint(self):
        messagebox.showinfo("Hint", f"Hint: {self.hint}")

    def play_again(self):
        self.word_to_guess = random.choice(list(self.words_with_hint.keys()))
        self.hint = self.words_with_hint[self.word_to_guess]
        self.guessed_word = ['_'] * len(self.word_to_guess)
        self.attempts = 6
        self.guesses = []
        self.attempts_label.config(text=f"Attempts left: {self.attempts}")
        self.guess_button.config(state=tk.NORMAL)
        self.play_again_button.config(state=tk.DISABLED)
        self.update_ui()

def main():
    root = tk.Tk()
    game = HangmanGame(root)
    root.mainloop()

if __name__ == "__main__":
    main()



