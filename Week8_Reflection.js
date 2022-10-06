// https://share.sourceacademy.nus.edu.sg/22100609

function make_withdraw(balance, reg_pw) {
    let wrong_tries = 0;

    function withdraw(amount, pw) {
        if (wrong_tries >= 3) {
            return "Account disabled";
        }
        
        if (pw !== reg_pw) {
            wrong_tries = wrong_tries + 1;
            return "Wrong password; no withdraw";
        } else {
            wrong_tries = 0;
            if (balance >= amount) {
                balance = balance - amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        }
    }
    return withdraw;
}

const acc = make_withdraw(100, "my_password");
display(acc(30, "his_passcode")); // returns "Wrong password; no withdraw"
display(acc(30, "my_password")); // returns 70
display(acc(10, "sesame")); // returns "Wrong password; no withdraw"
display(acc(15, "canola")); // returns "Wrong password; no withdraw"
display(acc(25, "olive")); // returns "Wrong password; no withdraw"
display(acc(30, "my_password")); // returns "Account disabled"
display(acc(30, "his_passcode")); // returns "Account disabled"
display(acc(30, "his_passcode")); // returns "Account disabled"
display(acc(30, "his_passcode")); // returns "Account disabled"
display(acc(30, "his_passcode")); // returns "Account disabled"
display(acc(30, "his_passcode")); // returns "Account disabled"

/* BRUH
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣄⣤⣤⣤⣠⣄⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡤⠶⣛⣍⡫⠴⠐⠂⠖⠦⠌⠦⣙⡋⠷⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⢻⣕⠾⠛⠁⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠓⠦⣍⡳⢧⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡶⢏⡽⠋⠁⡀⠄⠠⢀⠀⢀⠀⠀⠀⠀⡀⠀⠀⠐⡀⠄⠀⠙⢌⡻⢶⡄⠀⠀⠀⠀
⠀⠀⠀⠀⡀⣠⠿⣙⠋⢀⠠⠐⠈⡐⠁⠄⢈⠄⠒⡈⠌⠠⢐⠈⣁⠀⠁⢌⠐⠀⡀⠙⢦⢻⣅⡀⠀⠀
⠀⠀⠀⠀⢷⡫⡝⠡⠐⢂⠂⠄⣃⠄⠢⠔⠠⢄⠁⠠⢁⠈⠄⡤⠂⠌⠄⡀⢂⠐⠄⠂⠌⢣⡛⣧⠀⠀
⠀⠀⠀⣰⣯⠱⣀⠣⠌⠠⡘⡨⠂⢍⣡⣾⡗⠢⠜⠀⠄⠎⢁⢸⣷⣔⠉⡰⠂⡈⠤⢉⠰⡁⢞⡹⣇⠀
⠀⠀⢈⣽⡒⢇⠆⡱⢈⣥⣴⣶⣿⣿⠿⢋⠠⠑⣈⠆⠌⡘⠄⡐⠹⢿⣿⣶⣥⣜⣠⠊⡔⠡⢎⡵⣿⠀
⠀⠀⠸⣷⡙⡎⡜⡰⢉⠭⣉⠩⡁⢄⢂⢂⡊⢥⠐⡁⠚⡀⠒⡄⠣⡄⢊⠩⢛⠛⡛⡡⢌⠓⣬⢒⣿⡇
⠀⠀⢘⣷⡹⣒⠥⣃⠧⣒⣿⣿⣿⣿⣿⣿⣿⠆⠩⠄⢡⠁⠺⣿⣿⣷⣷⣿⣾⣶⢡⢓⣌⠳⣌⡳⢾⡇
⠀⠀⠈⣷⢻⣌⠳⣍⠶⣡⠧⣍⠭⣉⠍⡉⢄⠢⢡⠘⡠⢌⢉⠊⡍⢛⡙⢫⡍⢧⡹⢜⣢⢛⡴⣫⢿⠁
⠀⠀⠀⢿⡗⣮⢹⣌⠳⣥⢛⣬⣲⣱⣮⡵⠿⠶⠷⠿⠶⠿⠾⠶⢵⣮⣜⣣⠞⣥⢛⡜⢦⢫⣜⣳⡿⠀
⠀⠀⠀⠐⢿⣎⠷⣬⢻⣴⣿⢛⣉⢁⡀⡀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣶⣭⣚⢥⡳⣎⣿⠃⠀
⠀⠀⠀⠀⠘⣯⢷⣎⢧⣋⢭⣋⢿⡟⡻⢽⡟⣟⡻⢿⣿⣿⣷⣿⣾⣶⣶⣶⣿⣿⣿⢋⡶⣝⡿⠃⠀⠀
⠀⠀⠀⠀⠀⠘⠿⣞⡶⣭⠲⣍⢞⡣⣝⢺⢹⡰⢩⠖⣢⢍⡻⢯⣿⣽⣟⣿⣽⢳⣭⢻⣼⠟⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠿⡟⠛⠾⣬⡳⣌⢧⢣⠞⣱⢚⡴⣊⠵⣋⡜⣣⠻⣜⢶⣫⣾⡟⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣀⣤⢾⢻⣜⡰⢄⡹⢾⣎⢧⣯⡌⠳⠼⣥⣻⢴⣫⢵⣛⣮⡷⠟⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣠⡴⢛⠩⡐⢌⠒⡌⢛⣟⡚⣉⢋⢛⡚⡙⢓⠣⡐⠌⣿⢟⣛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣜⡟⢄⢃⢊⡐⠌⡐⢈⠦⢨⣟⠩⡍⣋⠙⡄⢃⠂⢌⠒⢠⠉⠜⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⡿⢴⢨⡾⣶⣬⣲⣌⡲⣬⠟⠈⠛⠉⠉⢹⡤⢃⡜⢤⠚⣤⣉⢖⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⣴⢻⣣⢟⡱⢡⢍⢣⡙⣴⠏⠀⠀⠀⠀⠀⠀⠻⠳⠾⠾⠛⠓⠛⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠈⢻⣋⣼⢋⣶⢊⡆⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⢰⡯⣶⡏⣽⢏⡾⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠙⢾⠯⣹⢫⣞⡼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠙⠙⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
*/