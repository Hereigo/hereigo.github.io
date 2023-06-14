### 5 useful extensions for Task<T>:

```csharp

// 1. FIRE AND FORGET =========================

exception.

public static void FireAndForget(
  this Task task,
  Action<Exception> errorHandler = null)
{
    task.ContinueWith(t =>
    {
        if (t.IsFaulted && errorHandler != null)
            errorHandler(t.Exception);
    }, TaskContinuationOptions.OnlyOnFaulted);
}

// Usage:

SendEmailAsync().FireAndForget(errorHandler => Console.WriteLine(errorHandler.Message));

// 2. RETRY ======================================

// If you want to retry a task a specific number of times, you can use the Retry extension method. This method will retry the task until it succeeds or the maximum number of retries is reached. You can pass a delay between retries. This delay will be used between each retry.

public static async Task<TResult> Retry<TResult>(this Func<Task<TResult>> taskFactory, int maxRetries, TimeSpan delay)
{
    for (int i = 0; i < maxRetries; i++)
    {
        try
        {
            return await taskFactory().ConfigureAwait(false);
        }
        catch
        {
            if (i == maxRetries - 1)
                throw;
            await Task.Delay(delay).ConfigureAwait(false);
        }
    }

    return default(TResult); // Should not be reached
}

// Usage:

var result = await (() => GetResultAsync()).Retry(3, TimeSpan.FromSeconds(1));

// 3. ONFAILURE ======================================

// Executes a callback function when a Task encounters an exception.

public static async Task OnFailure(this Task task, Action<Exception> onFailure)
{
    try
    {
        await task.ConfigureAwait(false);
    }
    catch (Exception ex)
    {
        onFailure(ex);
    }
}

// Usage:

await GetResultAsync().OnFailure(ex => Console.WriteLine(ex.Message));

// 4. TIMEOUT ======================================

// Sometimes you want to set a timeout for a task. This is useful when you want to prevent a task from running for too long. You can use the Timeout extension method to set a timeout for a task. If the task takes longer than the timeout the task will be cancelled.

public static async Task WithTimeout(this Task task, TimeSpan timeout)
{
    var delayTask = Task.Delay(timeout);
    var completedTask = await Task.WhenAny(task, delayTask).ConfigureAwait(false);
    if (completedTask == delayTask)
        throw new TimeoutException();

    await task;
}

// Usage:

await GetResultAsync().WithTimeout(TimeSpan.FromSeconds(1));

// Note: Since .NET 6 you can use WaitAsync.

// 5. FALLBACK ======================================

// Sometimes you want to use a fallback value when a task fails. You can use the Fallback extension method to use a fallback value when a task fails.

public static async Task<TResult> Fallback<TResult>(this Task<TResult> task, TResult fallbackValue)
{
    try
    {
        return await task.ConfigureAwait(false);
    }
    catch
    {
        return fallbackValue;
    }
}

// Usage:

var result = await GetResultAsync().Fallback("fallback");

// CONCLUSION ======================================

// There we have it: Five useful extensions for Task. Of course, you can also make them work for ValueTask if you want to. If you have more, please let me know!