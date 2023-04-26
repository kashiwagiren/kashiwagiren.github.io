#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>
#include <time.h>
#include <unistd.h>

#define ANSI_COLOR_CYAN    "\x1b[36m"
#define ANSI_COLOR_RESET   "\x1b[0m"
#define ASCII_ART ANSI_COLOR_CYAN " ____  _     _  ____    _____ ____  _      _____\n/  _ \\/ \\ /\\/ \\/_   \\  /  __//  _ \\/ \\__/|/  __/\n| / \\|| | ||| | /   /  | |  _| / \\/|| |\\/|||  \\  \n| \\_\\|| \\_/|| |/   /_  | |_//| |-||| |  |||  /_ \n\\____\\\\____/\\_/\\____/  \\____\\\\_/ \\|\\_/  \\|\\____\\" ANSI_COLOR_RESET

void startGame();
void gameInfo();
void gameQuestions(int level, int *score, int *total_questions);
void levelProceed(int level, int *score, int *total_questions);
void repeat();

int main()
{
    char choice;
    while(1)
    {
        system("clear");
        printf("%s\n", ASCII_ART);
        printf(" _______________________________________\n");
        printf("/                                       \\\n");
        printf("|                                       |\n");
        printf("|                ______                 |\n");
        printf("|               / ____ \\                |\n");
        printf("|              / /    \\ \\               |\n");
        printf("|             | |                       |\n");
        printf("|             | |                       |\n");
        printf("|             | |                       |\n");
        printf("|              \\ \\____/ /               |\n");
        printf("|               \\______/                |\n");
        printf("|                                       |\n");
        printf("|         PRESS 'S' TO START            |\n");
        printf("|         PRESS 'I' FOR INFO            |\n");
        printf("|         PRESS 'E' TO EXIT             |\n");
        printf("|                                       |\n");
        printf("\\_______________________________________/\n");
        printf("\n          ");
        scanf(" %c", &choice);
        choice = tolower(choice);
        switch (choice)
        {
            case 's':
                startGame();
                break;
            case 'i':
                gameInfo();
                break;
            case 'e':
                exit(0);
                break;
            default:
                printf("          Invalid choice.\n");
                sleep(1);
                break;
        }
    }
    return 0;
}


void gameInfo()
{
    char pick;
    char picks[] = { 'i', 't' };

    info:
    system("clear");
    printf(" _____________________________________________________ \n");
    printf("|                                                     |\n");
    printf("|    A C Quiz Game Project Written & Designed by:     |\n");
    printf("|                  Kieth Wilbur J. Chua               |\n");
    printf("|                     BSCpE - 1st Year                |\n");
    printf("|_____________________________________________________|\n");
    printf("|                                                     |\n");
    printf("|             Press 'I' >> Next                       |\n");
    printf("|             Press 'T' >> Menu                       |\n");
    printf("|_____________________________________________________|\n");
    scanf(" %c", &pick);
    pick = tolower(pick);

    if (pick == 'i')
    {
        info1: 
        system("clear");
        printf(" _____________________________________________________ \n");
        printf("|                                                     |\n");
        printf("|                  What is this game for ?            |\n");
        printf("|_____________________________________________________|\n");
        printf("|                                                     |\n");
        printf("|    A C Quiz Game Project is a coding project that   |\n");
        printf("|    allows users to play a quiz game written in the  |\n");
        printf("|    C programming language. This project is a        |\n");
        printf("|    multiple choice quiz where you will have to      |\n");
        printf("|    choose between [A], [B], [C], or [D] to input    |\n");
        printf("|    the correct answer. There are 3 levels of        |\n");
        printf("|    difficulty: Easy, Normal, and Hard. You can      |\n");
        printf("|    choose any of these to start the game. After     |\n");
        printf("|    answering all levels, your total score will be   |\n");
        printf("|    displayed along with the mistakes and correct    |\n");
        printf("|    answers. You can then go back to the main menu.  |\n");
        printf("|_____________________________________________________|\n");
        printf("|                                                     |\n");
        printf("|             Press 'T' << Title Menu                 |\n");
        printf("|_____________________________________________________|\n");
        scanf(" %c", &pick);
        pick = tolower(pick);

        if (pick == 't') {
            main();
        } else {
            printf("Invalid input.\n");
            sleep(1.5);
            goto info1;
        }
    } else if (pick == 't') {
        main();
        return;
    } else {
        printf("Invalid input.\n");
        sleep(1.5);
        goto info;
    }
}

void startGame()
{
	int level, score = 0;
	int total_questions = 0;

	system("clear");
printf("/----------------------------------------\\\n");
printf("|         Select a level of difficulty   |\n");
printf("+----------------------------------------+\n");
printf("|    1. Easy                             |\n");
printf("|    2. Medium                           |\n");
printf("|    3. Hard                             |\n");
printf("\\----------------------------------------/\n");
printf("Enter your choice (1-3): ");

while(1) {
    if (scanf("%d", &level) != 1) {
        while(getchar() != '\n');
        printf("\n+----------------------------------------+\n");
        printf("|  Invalid input. Please choose a level  |\n");
        printf("|    between 1 and 3.                    |\n");
        printf("+----------------------------------------+\n");
        sleep(1);
        startGame();
    }
    else if (level < 1 || level > 3) {
        printf("\n+----------------------------------------+\n");
        printf("|  Invalid input. Please choose a level  |\n");
        printf("|    between 1 and 3.                    |\n");
        printf("+----------------------------------------+\n");
        sleep(1);
        startGame();
    }
    break;
}

gameQuestions(level, &score, &total_questions);

}

void gameQuestions(int level, int *score, int *total_questions)
{
	char answer;
	switch (level)
	{
		case 1:
			system("clear");
			char *questions[] = { "Easy level.\nWhat does 'printf' do?\n\na) Reads input from the user\nb) Prints output to the console\nc) Performs mathematical calculations\n",
				"\nWhat is a variable in C\n\na) A variable is a container for storing data\nb) A variable is a function in C\nc) A variable is a type of loop in C\n\n",
				"\nWhat is a function?\n\na) It allows to combine data items of different kinds\nb) A function is used to store a collection of data\nc) A function is a block of code that only runs when it is called\n\n",
				"\nWhat is output?\n\na) Output refers to writing the data and information on any printer file and displaying it on the screen\nb) Output refers to a control parameter used in various functions to specify the layout of an input string\nc) Output refers to feeding data into the program\n\n",
				"\nWhat is the syntax for printing \"Hello, World\" to the console in C?\n\na) print('Hello, World!');\nb) printf(\"Hello, World!\");\nc) console.log(\"Hello, World!);\n\n",
				"\nWhich of the following is not a valid data type in C?\n\na) int\nb) char\nc) string\n\n",
				"\nWhich of the following is not a valid C data type?\n\na) float\nb) string\nc) int\n\n",
				"\nWhich of the following is a loop in C?\n\na) while\nb) for\nc) switch\n\n",
				"\nWhich keyword is used to terminate a switch statement in C?\n\na) break\nb) exit\nc) default\n\n",
				"\nWhat does the following code snippet do? int x = 5; int *ptr = &x;\n\na) Declares an integer variable and assigns the value 5 to it\nb) Assigns the value of the pointer ptr to the variable x\nc) Assigns the address of the variable x to the pointer ptr\n\n" };

			char answers[] = { 'b', 'a', 'c', 'a', 'b', 'c', 'b', 'b', 'a', 'c' };

			for (int i = 0; i < 10; i++)
			{
				while (1)
				{
					system("clear");
					printf("%s\n", questions[i]);
					printf("Your answer: ");
					scanf(" %c", &answer);

					answer = tolower(answer);

					if (answer == 'a' || answer == 'b' || answer == 'c' ||
						answer == answers[i])
					{
						if (answer == answers[i])
						{
						    (*score) ++;
						}

						(*total_questions) += 1;
						break;
					}
					else
					{
						system("clear");
						printf
							("Invalid input. Please enter a, b, c.\n");
						sleep(2);
						system("clear");
					}
				}
			}

			levelProceed(level, score, total_questions);
			break;

		case 2:
			system("clear");

			char *questions1[] = { "\nMedium level.\nHow do you initialize a variable in C?\n\na) You declare the variable without assigning a value, and then assign a value to it later\nb) You assign a value to the variable when you declare it\nc) You cannot initialize a variable in C\n\n",
				"\nHow do you declare and use a pointer in C?\n\na) You declare a pointer using the '!' operator, and use it to store the memory address of a variable\nb) You declare a pointer using the '*' operator, and use it to store the memory address of a variable\nc) You declare a pointer using the '&' operator, and use it to store the memory address of a variable\n\n",
				"\nWhat is the difference between an array and a pointer in C?\n\na) An array is a pointer to a collection of elements of the same type\nb) There is no difference between an array and a pointer in C\nc) An array is a collection of elements of the same type, while a pointer is a variable that stores a memory address\n\n",
				"\nHow do you define a Union?\n\na) You can define a union with many members\nb) You can define a union but with only one member can contain a value at any given time\nc) Both A and B\n\n",
				"\nWhat is the difference between a while loop and a do-while loop in C?\n\na) There is no difference between while and do-while loops in C\nb) A do-while loop executes the loop body zero or more times, while a while loop executes the loop body one or more times\nc) A while loop executes the loop body zero or more times, while a do-while loop executes the loop body one or more times\n\n",
				"\nWhich of the following is not a valid C variable name?\n\na) myvar1\nb) my_var\nc) 1myvar\n\n",
				"\nWhat is the purpose of the 'const' keyword in C?\n\na) It defines a constant value that cannot be modified\nb) It is used to allocate memory dynamically\nc) It is used to declare a variable that is visible only within the function in which it is defined\n\n",
				"\nWhich of the following is a valid way to declare a function in C?\n\na) function_name (int a, int b) { 	// code }\nb) void function_name (int a, int b) { 	// code }\nc) int function_name (int a, b) { 	// code }\n\n",
				"\nWhich of the following statements about the sizeof() operator in C is true?\n\na) It returns the size of a variable in bytes\nb) It returns the address of a variable\nc) It returns the value of a variable\n\n",
				"\nWhich of the following is true about the 'static' keyword in C?\n\na) It means that the variable retains its value between function calls\nb) It is used to define a constant value that cannot be modified\nc) It is used to declare a variable that is visible only within the function in which it is defined\n\n" };

			char answers1[] = { 'b', 'b', 'c', 'c', 'c', 'c', 'a', 'b', 'a', 'a' };

			for (int i = 0; i < 10; i++)
			{
				while (1)
				{
					system("clear");
					printf("%s\n", questions1[i]);
					printf("Your answer: ");
					scanf(" %c", &answer);

					answer = tolower(answer);

					if (answer == 'a' || answer == 'b' || answer == 'c' ||
						answer == answers1[i])
					{
						if (answer == answers1[i])
						{ 				(*score) ++;
						}

						(*total_questions) += 1;
						break;
					}
					else
					{
						system("clear");
						printf
							("Invalid input. Please enter a, b, c.\n");
						sleep(2);
						system("clear");
					}
				}
			}

			levelProceed(level, score, total_questions);
			break;

		case 3:
			system("clear");

			char *questions2[] = { "\nHard level.\n\nWhich of the following is true about structures in C?\n\na) Structures can only contain variables of the same type\nb) Structures are used to allocate memory dynamically\nc) Structures can contain variables of different types\n\n",
				"\nHow do you pass parameters by reference in C?\n\na) By using pointers\nb) By using the 'const' keyword\nc) By using the 'static' keyword\n\n",
				"\nWhat is the difference between a function declaration and a function definition in C?\n\na) A function declaration provides the actual code that the function executes, while a function definition tells the compiler about a function's name, return type, and parameter types\nb) A function declaration tells the compiler about a function's name, return type, and parameter types, while a function definition provides the actual code that the function executes\nc) None of the above\n\n",
				"\nWhat is the difference between 'malloc' and 'calloc' in C?\n\na) 'malloc' allocates memory for a single object, whereas 'calloc' allocates memory for an array of objects\nb) 'calloc' initializes the allocated memory to zero, whereas 'malloc' leaves the memory uninitialized\nc) 'calloc' is faster than 'malloc' for small allocations, but slower for large allocations\n\n",
				"\nWhat is a 'function pointer' in C?\n\na) A variable that holds the address of a function\nb) A pointer to a data structure that represents a function\nc) A keyword used to declare a function that returns a pointer\n\n",
				"\nWhat is a 'segmentation fault' in C?\n\na) A runtime error that occurs when the program attempts to access memory that it is not allowed to access\nb) A syntax error that occurs when the programmer makes a mistake in the program code\nc) A compile-time error that occurs when the program cannot be translated into machine code\n\n",
				"\nWhat is the difference between 'static' and 'extern in C?\n\na) 'extern' declares a variable or function that is defined in another translation unit, whereas 'static' declares a variable or function that is defined in the current translation unit\nb) 'static' limits the visibility of a variable or function to the current translation unit, whereas 'extern' allows it to be used in other translation units\nc) 'static' ensures that a variable or function is only initialized once, whereas 'extern' allows multiple initializations across different translation units\n\n",
				"\nWhich of the following is a valid way to declare a pointer to an integer in C?\n\na) int *x;\nb) int x;\nc) int &x;\n\n",
				"\nWhich of the following functions is used to read a single character from the keyboard in C?\n\na) gets()\nb) scanf()\nc) getchar()\n\n",
				"\nWhich of the following is true about the 'register' keyword in C?\n\na) It is used to declare a variable whose value cannot be changed\nb) It is used to declare a variable whose value is stored in the CPU register\nc) It is used to declare a variable whose value is assigned at runtime\n\n" };

			char answers2[] = { 'c', 'a', 'b', 'a', 'a', 'a', 'b', 'a', 'c', 'b' };

			for (int i = 0; i < 10; i++)
			{
				while (1)
				{
					system("clear");
					printf("%s\n", questions2[i]);
					printf("Your answer: ");
					scanf(" %c", &answer);

					answer = tolower(answer);

					if (answer == 'a' || answer == 'b' || answer == 'c' ||
						answer == answers2[i])
					{
						if (answer == answers2[i])
						{ 				(*score) ++;
						}

						(*total_questions) += 1;
						break;
					}
					else
					{
						system("clear");
						printf
							("Invalid input. Please enter a, b, c.\n");
						sleep(2);
						system("clear");
					}
				}
			}

			levelProceed(level, score, total_questions);
			break;

		default:
			printf("\nInvalid. Please choose a level between 1 and 3.\n");
			sleep(1);
			startGame();
			break;
	}
}

void levelProceed(int level, int *score, int *total_questions)
{
    char choice;
lvl:
    if (level < 3)
    {
        system("clear");
        printf("\nYou have completed level %d.", level);
        printf("\n\nYour current score is %d / %d\n", *score, *total_questions);
        printf("+----------------------------+\n");
        printf("|  Do you want to proceed    |\n");
        printf("|    to the next level?      |\n");
        printf("+----------------------------+\n");
        printf("|     [Y]         [N]        |\n");
        printf("+----------------------------+\n");
        printf("Enter your choice: ");
        scanf(" %c", &choice);
        if (tolower(choice) == 'y') {
            gameQuestions(level + 1, score, total_questions);
        } else if (tolower(choice) != 'n' && tolower(choice) != 'y') {
            printf("\nInvalid.");
            fflush(stdout);
            sleep(1.5);
            goto lvl;
        } else if (tolower(choice) == 'n') {
            repeat();
        }
    }
    else
    {
        system("clear");
        char message[] =
            "Congratulations! You have completed the levels.";
        int i;
        for (i = 0; message[i] != '\0'; i++)
        {
            putchar(message[i]);
            fflush(stdout);
            usleep(100000);
        }

        sleep(2.5);
        printf("\n\nYour total score is %d / %d\n", *score,
            *total_questions);
        putchar('\n');
        repeat();
    }
}

void repeat()
{
    char choice;

res:
    printf("\nDo you want to restart? (y/n): ");
    scanf(" %c", &choice);

    if (tolower(choice) == 'y') {
        startGame();
    } else if (tolower(choice) == 'n') {
        exit(0);
    } else {
        printf("\nInvalid input.\n");
        fflush(stdout);
        sleep(1.5);
        goto res;
    }
}