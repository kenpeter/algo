https://leetcode.com/discuss/interview-question/2256806/Amazon-or-OA-and-Onsite-or-Rejected-or-SDE-1-L4-Hybrid-or-US-or-July-2022

Hey there, wanted to share my experience interviewing at Amazon - my tone may be a bit salty but will try to be objective as possible

This is a long in-depth post of my experience so only read this is you have time to kill

Background:

Went to an unranked university in the US that no one knows about

Failed Amazon internship OA during sophomore (2nd) year

Took some sort of IQ test, behavioral leadership-principles test, debugging test, and then failed at the 2 question OA
Failed Amazon SDE fresh new grad OA

Took debugging test and then failed the 2 question OA
Little over 1 year of experience as an SDE 1 at a medium sized company

Interview Preparation:

Spent 1.5 weeks casually looking through the first 150 questions on leetcode and looked at solutions to understand techniques and approaches to problems.

I don't leetcode, haven't read cracking the coding interview, haven't studied system design, and etc,

Not trying to brag but rather I don't study or prepare for interviews because I do not like the current way companies conduct their interviews in assessing a "qualified" software engineer, actually it's more like they try to filter out not necessarily "assess".
Process:

Recruiter (Took about 1 week to get sorted out)

Reached out by a bunch of recruiters from Amazon from all different teams (looks like they need engineers - wonder why...).

Had a 30 minute call with the engineering manager for a team to talk about the position, what the job would entail and ask about my background etc.

Manager showed up a few minutes late due to another meeting and had to leave immediately due to other meetings...
Issues applying since appearently if you graduated and only worked for 1 year you are still considered a student in their system and must apply for those student jobs otherwise you get filtered out by their system and managers can't see that you applied. So the engineering manager had to do a bunch of things behinad the scenes and gave me a special job opening to apply to so he can directly escalate me to the next step quickly

Wanted to apply for SDE2 position but forced to apply to SDE1 Job Position
Many of the recruiters told me they had no idea this happens lol
Online Assessment (OA)

Recruiter gave me an email on materials to study such as Amazon's Software Developement Topics, Codechef, Project Euler, Google Code Jam, High Scalability, Hackerrank, Career Cup, Cracking the Coding Interview Book Link, Introduction To Algorithms 3rd Ed, and a PDF and Word document on tips for the interview and what to expect

Given only 7 days after receiveing the link to take the online assessment otherwise I get automatically rejected

Assessment

Hackerrank | 105 minutes | 2 coding questions | 2 questions about what my algorithm does and the time/space complexity

Coding question 1 - K-closest-points-to-origin but uses restaurants and user as "points" and "origin" respectively.
Used priority queue with a modified comparator to handle their special logic cases for ties in restaurants with equal distance by prefering those with an X with a lower value
24/25 test cases, 1 failing to time limit exception
Coding question 2 - K most popualr combos - exactly this problem mentioned by another leetcode discussion
Sorted and used priority queue
8/15 test cases, 7 failing to time limit exceptions
Work style survey (behavioral - leadership principles) | 15 minutes | Multiple choice

Multiple choice options: Strongly Disagree | Disagree | Agree | Strongly Agree
There are youtube videos that explain this portion but need to be consistent and align with their leadership principle values otherwise you may get rejected on this
Feedback survey | 5 minutes | Empty Text Box

Did not submit feedback
Heard back from recruiter after 1 day of completing the OA and moved on to scheduling the onsite interview

Onsite Interview

Waited 2 weeks after completing OA

Signed an NDA prior to the onsite

Resources given: Amazon In-person Interview, Diversity and Inclusion, Life at AWS, AWS benefits

Had to sign up and download their chime app to do the whiteboard coding environment tests

3 coding interviews, 1 OOP system design, and behavioral questions in each interview

1 hr each
All interviews on the same day
Basic text editor with no suggestions/compilation
Assessment

Coding Interview

Interviewer (4 years at AWS) brought someone to shadow (8 years at AWS)
Coding Question: Max promotions at same time - given list of promotion intervals (start and end), get the max promotions happening at the same time
Exclude end times, so end time and start time if they are the same isn't considered overlapping
Reminds me of the interval partitioning / Classroom greedy problem
Sorted using special comparator then similar pattern to the linked problem but perhaps that was incorrect but ran the algorithm and got the results they were looking for...
Couldn't figure out time/space complexity exactly which made him think I didn't know what the code was doing....
Mentioned O(n log n + ....) and space was O(n) since I was creating a copy of the list which I told the interviewer I was not going to mutate and agreed upon this assumption
I forgot the behavioral questions the interviewer asked me
What did I learn from the interviewers?
AWS marketplace has 12-13 teams?
Both interviewers like their job because they get "ownership" and "leadership" principles that has helped develop their personality, personal life, and how to approach problems.
The environment is fast pace, intersting and challenging, you drive the project and not much "hierarchy", and there are lots of things lined up to do
Some managers are result driven can result in high pressure environments (meaning you need to work overtime and deliver otherwise say hello to PIP)
Coding Interview

Interviewer (5 years at AWS)
Behavioral Questions:
Tell me a time you took time in an area out of your responsibility? What resulted of it?
Tell me a time when you had to dela with a tough or critical feedback and what you did in response?
Coding Question: Group Anagrams but the given words could be of any length from 0 - N length, not all the same length
Counted character frequency in map, stored that frequency map into an object to preserve having to check if it's an anagram then used map equals to compare and place into correct group of anagrams
Wasn't able to speed up the algorithm, appearently he wanted me to "hash" the strings
He was not happy that I couldn't think of this and could see his dissapointment in his face
I did not think of this solution as I thought what if hashing leads to collisions and wrong results?
Had difficulties coming up with time complexity so he was not happy about that
What did I learn?
Typical day: stand up, pick tasks to work on that they planned, measure ticket time, meetings, code reviews
What help you get at Amazon? You get assigned a buddy but are strongly encouraged to figure out things on your own if you are stuck or blocked
OOP System Design

Interviewer (11 years at AWS) brought someone to shadow (5 months at AWS)
Behavioral Questions:
Tell me a time that you were able to deliver on a tight deadline and what sacrifices did you make to do?
Tell me a time that you solved a complex problem with a simple solution?
Coding Question: Design a game of tic tac toe assuming it's not using the internet or multi-threaded
Told him I was thinking about support multiple players, different board sizes, different ways of winning, inputs, outputs, etc for system design clarifications
Introduced a very common game design pattern interface to represent games and had the tic tac toe game implement it
I told him this allows us to check the status of the game (started, ended, paused, broke, etc) and start or end the game whenever we called those methods
Interviewer didn't seem to understand why and probably assumed I over-engineered it or didn't know what I was doing
Created classes for tic tac toe game (had an underlying 2d matrix, list of players, list of moves, and etc), created a player class
Used oop pattern to support undoing/redoing moves
Used functional pattern to support dynamic/static checks if a player won / can make a move / etc
This allows the tic tac toe game to support different sized boards, different rules to win or place a piece, easy reusable rules, and dynamically allow users to select rules they want to use
The interviewer said this was too complex and told me I should just extend the class if I wanted to support different sized boards or to support different rules...
However you can see how this is not a good approach and I was quite dissappointed given the fact he was insinuating that inheritance over composition was better design
He asked me why I didn't ask for player input in the constructor instead of the the start method
I did not like this idea because not all games start when initiated, may need to support pausing games, and etc
What did I learn?
11 years of experience at Amazon and still can't design tic tac toe game and even suggesting poor coding/design practices because the solutions I gave were too complex?
Working at Amazon doesn't mean you are a good engineer, that is what I learned from this exchange
If you have a deadline, you may end up spending extra hours to get that project delivered (overtime basically)
You are pushed to learn more
There are engineering excellence courses and mentoring for learning
There are lots of work, lots of opportunity but must take ownership of time and boundaries, "nothing out of the ordinary"
Coding Interview

Interviewer (4.5 years at AWS) brought someone to shadow (1 year at AWS)
Behavioral Questions:
Tell me the hardest bug you had to deal with and how you solved it and what impact it had?
Tell me a time you got really stuck and had a remove a serious block and what result it had?
Coding Question: Generate all well-formed parentheses
I had to ask him what well-formed means and went through some problems as I didn't quite understand what to do
Implemented the recursive solution, kind of a mix of solution 1 and 2
Interviewer seemed happy with my thought process
Follow Up Coding Question: How can we extend your current implementation of the code to support list of pairs of other symbols: [], {}, etc
I said I would iterate over the list and map the open and closing symbols with each other then I would use a for loop to iterate through all the symbols to generate well-formed symbols recursively still
What did I learn?
Some parts of AWS is using the traditional internal stack but they are migrating their code to use fully native AWS stack
You must drive your career growth, various opportunities, lots of learning resources and training sessions
The reason why people have to work late / long hours / are overworked is due to these reasons
High bar for customers, developers poorly design their system and it has faults, since it's your work then you are responibilty to to fix them regardless if it's in middle of the night
They are customer centric, you have ownership of your work so prevent it in the future from the same event from happening
You do get some days off after dealing with big fires and going through a retrospective
Some managers are pushy, so it's manager dependent
Did not set a proper timeline for the project, you lose trust with managers resulting potential PIP
After Onsite

Informed by HR that I was rejected the day after the onsite interview and they cannot disclose any feedback
I was told I can reapply to Amazon in 1 year and prompted to use Cracking the Coding Interview next time
Why did I get rejected?

Probably poor behavioral responses, not the most optimal solutions despite giving the more readable solution for interviewing purposes, maybe lost points for not correctly specifying time/space complexity, and they were not happy with questions I asked that "criticized" their company.
Overall Thoughts

Interview process can take a while

Study the Amazon tagged problems and read other peoples discussions about their Amazon interview experience to gain insight on what questions they are asking recently

Really make sure your behavioral answers correctly fit their leadership principles as they are testing you on those

They love data and measurable positive results in your responses
If you give answers that go against their leadership principles that is a big no-no
Taking long pauses to think about your answer may result in the interviewer thinking you are just making things up
Amazon's work life balance is highly dependent on the team, so do your research and ask actual employees (they can ask around and get insider information)

Yes PIP and work-life balance complaints are actually legitimate and not just people who "couldn't handle" their environment
I have spoken with many current/ex Amazon employees and they all say the same things
Great thing about Amazon is that you do get ownership of your work, there is always something to do, and you will be interacting with many customers!

Although there are learning opportunties and mentors, it seems that there is a lack of a supportive community and most people do things for themselves for their own benefits

People need to solve their own problems instead of asking for help from others
Many Amazon employees seem to have their life sucked out of them while working as that's the feeling I get when speaking with Amazon employees and from the interviewers

This is not an actual fact but just anecdotal when speaking with them at work vs outside of work
The interviewers did not seem want to joke around or even make a connection at all, essentially no personality at all, just robotic-like from my personal experience
Amazon will look great on your resume but I definitely wouldn't recommend staying there for very long if you value work life balance or want a less stressful environment.

Amazon needs engineers that's why so many recruiters will reach out to you eventually but they also burn out so many engineers at such a high turnover rate

But interviews can be a hit or miss depending on the team you are interviewing with
Make sure to show interest in the team you are applying as that is something I did not do
I know this has been a lot to read through, apologies but hopefully this gives you a better insight of what you can expect during the Amazon interview process and what insights you can learn when asking interviewers questions about the company/job.
Best of luck if you are applying to Amazon!



https://leetcode.com/problems/k-closest-points-to-origin/

https://leetcode.com/discuss/interview-question/1895396/amazon-sde-new-grad-oa-k-most-popular-combos

https://leetcode.com/playground/Gm2v6aee

#include <bits/stdc++.h>
using namespace std;

vector<long> bestCombo(vector<int> popularity, int k) {
    long posTotal = 0;
    vector<long> ans, out;
    for(int p: popularity) {
        if(p > 0)
            posTotal += p;
    }

    for(int& p: popularity) {
        p = abs(p);
    }
    sort(popularity.begin(), popularity.end());

    priority_queue<array<int, 2>, vector<array<int, 2>>, greater<array<int, 2>>> pq;
    int n = popularity.size();
    pq.push({popularity[0], 0});
    while(pq.size() && out.size() < k - 1) {
        auto s = pq.top();
        int u = s[0], i = s[1];
        pq.pop();
        out.push_back(u);
        if(i + 1 < n) {
            pq.push({u+popularity[i+1],i+1});
            pq.push({(u-popularity[i])+popularity[i+1],i+1});
        }
    }

    ans.push_back(posTotal);
    for(int o: out) {
        ans.push_back(posTotal - o);
    }

    return ans;
}

int main() {
    int n, k;
    cin >> n;
    vector<int> p(n);
    for(int&i : p) cin >> i;
    cin >> k;

    auto b = bestCombo(p, k);
    for(int i: b)
        cout << i << " ";
    return 0;
}

http://highscalability.com/blog/category/example
https://www.hackerrank.com/test/sample
https://www.amazon.jobs/en/landing_pages/in-person-interview
https://courses.cs.duke.edu/spring18/compsci330/Notes/greedy.pdf
https://leetcode.com/problems/group-anagrams/
https://leetcode.com/problems/generate-parentheses/
https://leetcode.com/problems/design-tic-tac-toe/