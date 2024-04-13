export const setTimeAgo = (create_date_ms: number) => {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const week = day * 7
    const mounth = day * 31
    const year = mounth * 12
    const current_Date_ms = Date.now();
    const time_ago_ms = current_Date_ms - create_date_ms
    let time_ago = ''
    if (time_ago_ms < minute) {
        const time_seconds = Math.floor(time_ago_ms / second)
        time_ago = `${time_seconds} seconds`
    }
    if (time_ago_ms >= minute && time_ago_ms < hour) {
        const time_minutes = Math.floor(time_ago_ms / minute)
        time_ago = `${time_minutes} minutes`
    }
    if (time_ago_ms >= hour && time_ago_ms < day) {
        const time_hour = Math.floor(time_ago_ms / hour)
        time_ago = `${time_hour} hours`
    }
    if (time_ago_ms >= day && time_ago_ms < week) {
        const time_day = Math.floor(time_ago_ms / day)
        time_ago = `${time_day} days`
    }
    if (time_ago_ms >= week && time_ago_ms < (mounth)) {
        const time_week = Math.floor(time_ago_ms / week)
        time_ago = `${time_week} weeks`
    }
    if (time_ago_ms >= mounth && time_ago_ms < (year)) {
        const time_mounth = Math.floor(time_ago_ms / mounth)
        time_ago = `${time_mounth} mounths`
    }
    if (time_ago_ms >= year) {
        const time_year = Math.floor(time_ago_ms / year)
        time_ago = `${time_year} years`
    }
    return time_ago
}