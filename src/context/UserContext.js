import React, {useState, createContext, useEffect} from 'react';
import { useCookies } from 'react-cookie';

export const UserContext = createContext(null)

const FAKE_USER = {
    userID: 1,
    userName: 'testUser123',
    userEmail: 'test@test.com',
    userCurrency: '0',
    userEquipment: [], //definitely array of objects. maybe uses
    userSolveRate: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    },
    userSettings: {
        darkMode: true,
        animations: true
    }
}

const EXPERIENCE_REWARDS = {
    1: 1000, 
    2: 400,
    3: 300,
    4: 200,
    5: 100,
    6: 50
}

const UserContextProvider = ({children}) => {
    const [userId, setUserId] = useState(FAKE_USER.userId)
    const [displayName, setDisplayName] = useState(FAKE_USER.userName)
    const [firstName, setFirstName] = useState(FAKE_USER.userSettings)
    const [lastName, setLastName] = useState(FAKE_USER.userSettings)
    const [profilePicture, setProfilePicture] = useState(FAKE_USER.userSettings)
    const [userCurrency, setUserCurrency] = useState(FAKE_USER.userCurrency)
    const [userEquipment, setUserEquipment] = useState(FAKE_USER.userEquipment)
    const [userSolveRate, setUserSolveRate] = useState(FAKE_USER.userSolveRate)
    const [userSettings, setUserSettings] = useState(FAKE_USER.userSettings)
    const [userSince, setUserSince] = useState(Date.now())
    const [cookies] = useCookies(['worgpid']);
    useEffect(() => {
        if(cookies) {
            fetch('http://localhost:5000/user/getcurrent', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({userId: cookies})})
                .then(res => res.json())
                .then(user => {
                    setUserId(user.userId)
                    setDisplayName(user.displayName)
                    setFirstName(user.firstName)
                    setLastName(user.lastName)
                    setProfilePicture(user.image)
                    setUserCurrency(user.userCurrency)
                    setUserEquipment(user.userEquipment)
                    setUserSolveRate({1: user.solveOne, 2: user.solveTwo, 3: user.solveThree, 4: user.solveFour, 5: user.solveFive, 6: user.solveSix, failed: user.solveFail})
                    setUserSince(user.createdAt)
                })
        }
        return
    }, [cookies])
    

    const updateSolveRate = turn => {
        setUserSolveRate(prev => prev[turn] + 1)
        // then send to server
    }

    const awardCurrency = turn => {
        setUserCurrency(prev => prev + EXPERIENCE_REWARDS[turn])
        // then send to server
    }

    return (
        <UserContext.Provider value={{userSince, userId, displayName, firstName, lastName, profilePicture, userCurrency, awardCurrency, userEquipment, setUserEquipment, userSolveRate, updateSolveRate, userSettings, setUserSettings}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider