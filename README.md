[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13051664&assignment_repo_type=AssignmentRepo)
# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.

### My analysis 

In this Empirical Analysis method, I've tested it with 13 different input size graphs, by ensuring different scenarios. The runtime didn't changed much for the first couple input size. But Mostly after input size 8 the graph started to differ more.

Combining these two different strategies: Held-Karp and Local Search. Held-karp will always gives us the shortest route or an equally short one compared to Local search. This is because Held-karp looks for absolute best route.

On the other hand, Local search is more about efficiency. It keeps refining the route until it can't make it any better. It might not always fiind the very best route, and the route length can change with each try. 

By putting it together, we get the accuracy of Held-Karp, ensuring the best route, and the efficiency from Local Search. 

I've attached `code.js` with both implementation of tsp_hk and tsp_ls , `code.test.js` with 13 different grapph scenarios , `data.txt` with 13 different graph data , `lengthanalysisgraph.jpg` for comparing length `Timeanalysisgraph.jpg` for comparing time in milliseconds. 

