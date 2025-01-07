const data: {
  id: string;
  category: string;
  examples: {
    id: string;
    title: string;
    text: string;
  }[];
}[] = [
  {
      id: "1",
      category: "Alert Update",
      examples: [
        {
          id: "1.1",
          title: "Account Alert",
          text: "Hello [Name]! 👋\n\nWe've detected an unusual login attempt to your account from a new device.  \nIf this wasn't you, we recommend that you change your password immediately for your security 🔒.  \nIf you need any help, don't hesitate to contact our support team.\n\nStay safe,  \n[Your Company Name] 💻"
        },
        {
          id: "1.2",
          title: "Low Balance Alert",
          text: "Hi [Name]! 👋\n\nYour account balance is running low.  \nOnly [Amount] is left in your account, and we recommend adding funds soon to ensure no interruptions to your services 🚨.  \nPlease log in to your account and top up your balance at your convenience.\n\nThank you for being a valued customer!  \n[Your Company Name] 💳"
        },
        {
          id: "1.3",
          title: "Usage Alert",
          text: "Dear [Name],\n\nThis is just a quick heads-up! You've used 90% of your data this month 📊.  \nDon't worry, there's still time to upgrade your plan for more data.  \nWe'll make sure you stay connected without any interruptions.  \n\nFeel free to reach out if you need assistance with upgrading.  \n[Your Company Name] 📱"
        },
        {
          id: "1.4",
          title: "Policy Change",
          text: "Hi [Name], 👋\n\nWe've recently updated our privacy policy. 📝  \nTo ensure that you're up to date with our latest changes, please take a moment to review the new policy on our website.  \nThese changes are aimed at improving your experience and ensuring your data is handled with care.  \n\nThank you for being with us,  \n[Your Company Name]"
        },
        {
          id: "1.5",
          title: "Service Outage Notice",
          text: "Hello [Name],\n\nWe regret to inform you that we are experiencing a service outage due to essential maintenance 🛠️.  \nOur team is working hard to resolve the issue, and we expect everything to be back to normal by [Date].  \nWe sincerely appreciate your patience and understanding during this time.\n\nFor any urgent concerns, please contact our support team.  \n[Your Company Name]"
        },
        {
          id: "1.6",
          title: "Subscription Expiration",
          text: "Hi [Name],\n\nJust a friendly reminder that your subscription for [Service Name] is set to expire on [Date].  \nTo continue enjoying uninterrupted access, please renew your subscription before the due date.  \nWe value your business and are here to help if you have any questions!\n\nThank you,  \n[Your Company Name] 🎉"
        },
        {
          id: "1.7",
          title: "Account Locked",
          text: "Dear [Name],\n\nWe've temporarily locked your account due to suspicious activity detected. 🚫  \nPlease contact our support team immediately to verify your identity and unlock your account.  \nYour security is our top priority, and we'll help you regain access quickly.\n\nThank you for your cooperation,  \n[Your Company Name] 🔐"
        }
      ]
    },
    {
      id: "2",
      category: "Appointment Update",
      examples: [
        {
          id: "2.1",
          title: "Appointment Reminder",
          text: "Hi [Name]! 👋\n\nThis is a friendly reminder for your upcoming appointment with [Provider] on [Date] at [Time]. ⏰  \nWe look forward to seeing you and assisting you with your [Service].  \nPlease let us know if you need to reschedule or if you have any questions.\n\nThank you,  \n[Your Company Name] 🏥"
        },
        {
          id: "2.2",
          title: "Confirmation",
          text: "Dear [Name],\n\nYour appointment with [Provider] has been successfully confirmed! ✅  \nWe can't wait to meet with you on [Date] at [Time].  \nIf you need to make any changes to the appointment or have any special requests, feel free to reach out.\n\nLooking forward to seeing you,  \n[Your Company Name] 🗓️"
        },
        {
          id: "2.3",
          title: "Reschedule Request",
          text: "Hello [Name],\n\nDue to unforeseen circumstances, we need to reschedule your appointment with [Provider].  \nThe new appointment time is [New Date & Time]. We hope this time works better for you!  \nPlease let us know if you need to change it again or have any other preferences.\n\nThank you for your understanding,  \n[Your Company Name] 🔄"
        },
        {
          id: "2.4",
          title: "Cancelation Notice",
          text: "Hi [Name],\n\nUnfortunately, your appointment scheduled for [Date] has been canceled. 🗓️  \nWe apologize for any inconvenience this may have caused.  \nIf you wish to reschedule, please contact us, and we will find a new time that works best for you.\n\nThank you,  \n[Your Company Name] ⏳"
        },
        {
          id: "2.5",
          title: "Pre-Visit Instructions",
          text: "Dear [Name],\n\nBefore your appointment with [Provider] on [Date], please make sure to arrive 10 minutes early and bring the following documents:  \n- [List of Documents]  \nThis will help us serve you better and speed up your check-in process. 🏃‍♂️💨  \nIf you have any questions or need assistance, feel free to contact us!\n\nLooking forward to seeing you,  \n[Your Company Name] 🏥"
        },
        {
          id: "2.6",
          title: "Follow-Up Reminder",
          text: "Hi [Name],\n\nJust a quick reminder! Your follow-up appointment with [Provider] is due soon. ⏳  \nPlease contact us to schedule it at a time that works best for you.  \nWe look forward to helping you continue your journey to better health.\n\nThank you,  \n[Your Company Name] 💼"
        },
        {
          id: "2.7",
          title: "Appointment Waiting List",
          text: "Hello [Name],\n\nGood news! A spot has opened up for your appointment with [Provider].  \nWould you like to confirm for [New Date & Time]? Please let us know soon so we can reserve your slot!  \nWe look forward to seeing you!\n\nBest regards,  \n[Your Company Name] 🎉"
        }
      ]
    },
    {
      id: "3",
      category: "Auto Reply",
      examples: [
        {
          id: "3.1",
          title: "Thanks for Your Message",
          text: "Hi [Name],  \n\nThank you for reaching out to us! 😄 We've received your message and our team is reviewing it.  \nYou can expect a reply within the next 24 hours.  \nIf your matter is urgent, please call our support team directly.\n\nThank you for your patience!  \n[Your Company Name] 💬"
        },
        {
          id: "3.2",
          title: "Out of Office",
          text: "Hello [Name], 👋\n\nI'm currently out of the office and will return on [Return Date].  \nI'll respond to your message as soon as I'm back.  \nFor urgent matters, please contact [Alternative Contact Person].\n\nThank you for your understanding!  \n[Your Company Name] 🌴"
        },
        {
          id: "3.3",
          title: "Thank You",
          text: "Hi [Name],  \n\nThank you for your message! 🙏 We've received it and will respond shortly.  \nWe value your time and will get back to you as soon as possible.  \nIn the meantime, feel free to browse our website for more information.\n\nBest regards,  \n[Your Company Name] 💬"
        },
        {
          id: "3.4",
          title: "Holiday Notice",
          text: "Hi [Name],\n\nThank you for your message! 🎄 Our team is currently out of the office for the holidays and will return on [Return Date].  \nWe'll get back to you as soon as we're back.  \nWe wish you a wonderful holiday season!\n\nWarm regards,  \n[Your Company Name] 🎉"
        },
        {
          id: "3.5",
          title: "Inquiry Received",
          text: "Hi [Name],\n\nThank you for reaching out to us! 📝 We've received your inquiry and our team is currently reviewing it.  \nYou can expect a response within [X hours].  \nIn the meantime, feel free to explore our [website/services].\n\nThanks for your patience,  \n[Your Company Name] 💼"
        },
        {
          id: "3.6",
          title: "High Volume",
          text: "Hi [Name],\n\nThanks for getting in touch! 📬 We're currently experiencing a high volume of inquiries.  \nWe'll do our best to get back to you as soon as we can.  \nThanks for your patience and understanding.\n\nBest regards,  \n[Your Company Name] 🙏"
        },
        {
          id: "3.7",
          title: "Outside Business Hours",
          text: "Hi [Name],  \n\nThanks for your message! ⏰ Our team is currently outside of business hours.  \nWe'll respond as soon as we're back in the office on [Next Business Day].  \nIn the meantime, feel free to check out our website for helpful information.\n\nBest regards,  \n[Your Company Name] 🌙"
        }
      ]
    },
    {
      id: "4",
      category: "OTP Template",
      examples: [
        {
          id: "4.1",
          title: "OTP for Verification",
          text: "Hi [Name]! 👋  \n\nYour one-time password (OTP) to verify your account is: [OTP].  \nThis code will expire in 5 minutes ⏳, so be sure to enter it soon.  \nIf you didn't request this, please contact support immediately for assistance.\n\nThank you,  \n[Your Company Name] 🔒"
        },
        {
          id: "4.2",
          title: "Transaction Verification",
          text: "Dear [Name],\n\nYou've requested a transaction of [Amount].  \nTo confirm, please enter the OTP: [OTP].  \nThis code is valid for 5 minutes, so be sure to use it right away.\n\nThanks for using [Your Company Name]! 💳"
        },
        {
          id: "4.3",
          title: "Security Code",
          text: "Hello [Name],  \n\nHere is your security code: [OTP].  \nThis code is only valid for 10 minutes, so please use it as soon as possible.  \nIf you need help, don't hesitate to contact support!\n\nStay safe,  \n[Your Company Name] 🛡️"
        },
        {
          id: "4.4",
          title: "Login OTP",
          text: "Hi [Name],  \n\nYour OTP for logging into your account is: [OTP].  \nThis code is valid for 5 minutes ⏱️.  \nEnter it now to securely access your account.\n\nBest regards,  \n[Your Company Name] 🔐"
        },
        {
          id: "4.5",
          title: "Transaction OTP",
          text: "Hi [Name],  \n\nThe OTP for your transaction of [Amount] is: [OTP].  \n\nPlease enter this code on the payment page to complete the transaction.  \nIt will expire in 10 minutes.\n\nThank you,  \n[Your Company Name] 💸"
        },
        {
          id: "4.6",
          title: "Password Reset OTP",
          text: "Dear [Name],  \n\nWe received a request to reset your password.  \nUse the OTP [OTP] to complete the reset process.  \nThis OTP will expire in 10 minutes.\n\nThank you,  \n[Your Company Name] 🔑"
        },
        {
          id: "4.7",
          title: "Account Recovery OTP",
          text: "Hello [Name],  \n\nYour OTP to recover your account is: [OTP].  \nPlease enter the code on the account recovery page.  \nThe OTP will expire in 5 minutes.\n\nBest regards,  \n[Your Company Name] 🔐"
        }
      ]
    },
    {
      id: "5",
      category: "Payment Update",
      examples: [
        {
          id: "5.1",
          title: "Payment Confirmation",
          text: "Hello [Name]! 👋\n\nWe've successfully received your payment of [Amount] for [Product/Service].  \nYour order is now being processed, and you'll receive an update on the delivery/shipping soon.  \nThank you for choosing us, and we hope you enjoy your [Product/Service]! 😊\n\nBest regards,  \n[Your Company Name] 💳"
        },
        {
          id: "5.2",
          title: "Payment Reminder",
          text: "Hi [Name],  \n\nThis is a gentle reminder that your payment of [Amount] for [Service/Product] is due by [Due Date].  \nPlease ensure to complete the payment before the due date to avoid any disruptions to your services.  \nIf you need assistance with payment, our support team is available to help.\n\nThanks for being a valued customer,  \n[Your Company Name] 💸"
        },
        {
          id: "5.3",
          title: "Payment Declined",
          text: "Dear [Name],  \n\nUnfortunately, your recent payment attempt for [Amount] was declined.  \nPlease check your payment details and try again. If the issue persists, feel free to contact us for further assistance.  \nWe appreciate your understanding and look forward to resolving this for you.\n\nBest regards,  \n[Your Company Name] 🔄"
        },
        {
          id: "5.4",
          title: "Refund Processed",
          text: "Hi [Name],  \n\nWe wanted to let you know that your refund of [Amount] has been successfully processed.  \nThe funds will be credited back to your original payment method within [X] days.  \nIf you have any questions about this, don't hesitate to contact us!\n\nThank you,  \n[Your Company Name] 💵"
        },
        {
          id: "5.5",
          title: "Subscription Payment",
          text: "Dear [Name],\n\nWe've successfully processed your subscription payment of [Amount] for [Service/Plan].  \nYour subscription is now renewed for another [X] months.  \nThank you for choosing us as your [Service]! We're excited to continue"},
          
        {
            id: "5.6",
            title: "Income Update",
            text: "Hi [Name],  \n\nYour latest income of [Amount] has been successfully recorded.  \nThis brings your total income for the month to [Total Income].  \nFor more financial insights, check your account summary.\n\nBest regards,  \n[Your Company Name] 💼"}
          ,
          {
            id: "5.7",
            title: "Savings Goal Update",
            text: "Dear [Name],  \n\nCongrats on reaching [X]% of your savings goal! 🎉  \nYou're getting closer to your target of [Target Amount].  \nKeep up the great work, and let us know if you need any tips on reaching your goal faster.\n\nBest regards,  \n[Your Company Name] 💰"
          }
        ]},
        {id: "7", category: "Shipping Update", examples: [
            {
            id: "7.1",
            title: "Shipping Confirmation",
            text: "Hi [Name], \n\nYour order [Order Number] has been shipped! \nYou can expect it to arrive on [Delivery Date]. \nWe've included tracking details here: [Tracking Link]. \nThank you for shopping with us!\n\nBest regards, \n[Your Company Name] 📦"
            },
            {
            id: "7.2",
            title: "Shipping Delay",
            text: "Hello [Name], \n\nWe regret to inform you that your shipment has been delayed due to [Reason]. \nThe new expected delivery date is [New Date]. \nWe apologize for any inconvenience and appreciate your understanding.\n\nThank you, \n[Your Company Name] ⏳"
            },
            {
            id: "7.3",
            title: "Out for Delivery",
            text: "Dear [Name], \n\nGreat news! Your order is out for delivery! \nYou should expect it to arrive today, [Delivery Date]. \nKeep an eye on your tracking link for real-time updates.\n\nEnjoy your [Product]! \n[Your Company Name] 🚚"
            },
            {
            id: "7.4",
            title: "Shipping Status Update",
            text: "Hi [Name], \n\nWe wanted to let you know that your package is currently in transit and is expected to arrive by [Date]. \nYou can track its journey here: [Tracking Link]. \nThank you for your patience!\n\nBest regards, \n[Your Company Name] 📦"
            },
            {
            id: "7.5",
            title: "Shipping Address Issue",
            text: "Hello [Name], \n\nWe noticed an issue with your shipping address. \nPlease verify your address at your earliest convenience to avoid delays in shipping. \nYou can update it directly in your account.\n\nThank you for your prompt attention! \n[Your Company Name] 🔄"
            },
            {
            id: "7.6",
            title: "Shipped – Thank You",
            text: "Hi [Name], \n\nYour order has been successfully shipped, and we thank you for your purchase! \nExpected delivery: [Delivery Date] \nTracking Link: [Tracking Link] \nWe hope you enjoy your [Product].\n\nBest regards, \n[Your Company Name] 🎉"
            },
            {
            id: "7.7",
            title: "Shipping Exception",
            text: "Dear [Name], \n\nWe encountered an exception while processing your order shipment. \nPlease be assured that we're working on it and will update you on the status shortly. \nWe appreciate your understanding and patience.\n\nThank you, \n[Your Company Name] ⚠️"
            }
            ]},
            {

            id: "8", category: "Ticket Update", examples: [
            {
            id: "8.1",
            title: "Ticket Confirmation",
            text: "Hello [Name]! \n\nYour ticket for [Event/Service] has been confirmed. \nDate: [Event Date] \nTime: [Event Time] \nWe look forward to seeing you there! 🎟\n\nBest regards, \n[Your Company Name] 🥳"
            },
            {
            id: "8.2",
            title: "Ticket Cancellation",
            text: "Dear [Name], \n\nWe regret to inform you that your ticket for [Event/Service] has been canceled due to [Reason]. \nIf you need assistance with a refund or rescheduling, please contact us.\n\nThank you, \n[Your Company Name] ❌"
            },
            {
            id: "8.3",
            title: "Ticket Update – Venue Change",
            text: "Hi [Name], \n\nWe've updated your ticket details for [Event/Service]. \nThe new venue is [New Venue Name], and the timing remains [Event Time]. \nWe look forward to welcoming you to the updated location!\n\nBest regards, \n[Your Company Name] 🎟"
            },
            {
            id: "8.4",
            title: "Ticket Reminder",
            text: "Hello [Name], \n\nYour ticket for [Event/Service] is coming up soon! \nDate: [Event Date] \nTime: [Event Time] \nWe can't wait to have you join us!\n\nBest regards, \n[Your Company Name] ⏰"
            },
            {
            id: "8.5",
            title: "Ticket Rescheduling",
            text: "Dear [Name], \n\nDue to unforeseen circumstances, [Event/Service] has been rescheduled. \nNew Date: [New Date] \nNew Time: [New Time] \nWe apologize for any inconvenience and appreciate your understanding.\n\nBest regards, \n[Your Company Name] 🔄"
            },
            {
            id: "8.6",
            title: "Ticket Upgrade",
            text: "Hi [Name], \n\nWe're excited to inform you that your ticket for [Event/Service] has been upgraded to [New Package]. \nEnjoy the enhanced experience! \nIf you have any questions, feel free to reach out.\n\nBest regards, \n[Your Company Name] 🎉"
            },
            {
            id: "8.7",
            title: "Ticket Refund Processed",
            text: "Hello [Name], \n\nYour refund for the ticket to [Event/Service] has been processed. \nThe funds will be credited back to your account within [X] days. \nThank you for your patience!\n\nBest regards, \n[Your Company Name] 💵"
            }
            ]},
            
            {
                id: "9", category: "Transportation Update", examples: [
            {
            id: "9.1",
            title: "Ride Confirmation",
            text: "Hello [Name], \n\nYour ride with [Company Name] has been confirmed! \nPick-up Location: [Pick-up Address] \nDrop-off Location: [Drop-off Address] \nYour driver [Driver Name] will arrive at [Time]. \nThank you for choosing [Company Name]! 🚗\n\nBest regards, \n[Your Company Name] 🚘"
            },
            {
            id: "9.2",
            title: "Ride Cancellation",
            text: "Hi [Name], \n\nWe regret to inform you that your ride has been canceled due to [Reason]. \nPlease feel free to book a new ride at your convenience. \nThank you for your understanding.\n\nBest regards, \n[Your Company Name] ❌"
            },
            {
            id: "9.3",
            title: "Ride Delay",
            text: "Dear [Name], \n\nThere is a slight delay with your ride due to [Reason]. \nYour new estimated arrival time is [Time]. \nWe apologize for the inconvenience and thank you for your patience.\n\nBest regards, \n[Your Company Name] ⏳"
            },
            {
            id: "9.4",
            title: "Ride Feedback Request",
            text: "Hi [Name], \n\nWe hope you had a pleasant ride with us! \nPlease take a moment to share your feedback about your ride experience. \nYour opinion is valuable and helps us improve. 🌟\n\nBest regards, \n[Your Company Name] 💬"
            },
            {
            id: "9.5",
            title: "New Ride Available",
            text: "Hello [Name], \n\nA new ride has become available in your area! \nYou can book a ride from [Location] to [Destination]. \nWe're ready when you are! 🚖\n\nBest regards, \n[Your Company Name] 🎉"
            },
            {
            id: "9.6",
            title: "Ride Route Update",
            text: "Dear [Name], \n\nPlease note that there has been a route update for your ride. \nYour new pick-up location is [New Location]. \nYour driver will arrive at [Time]. Thank you for your flexibility!\n\nBest regards, \n[Your Company Name] 🚗"
            },
            {
            id: "9.7",
            title: "Ride Arrival Notification",
            text: "Hi [Name], \n\nYour ride has arrived at [Pick-up Location]. \nDriver Name: [Driver Name] \nCar Model: [Car Model] \nPlease confirm your pick-up. Thank you!\n\nBest regards, \n[Your Company Name] 🚘"
            }
            ]},
            {
               

            id: "10", category: "Transportation Delay", examples: [
    { 
        id: "10.1", 
        title: "Ride Confirmation", 
        text: "Hello [Name], \n\nYour ride with [Company Name] has been confirmed! \nPick-up Location: [Pick-up Address] \nDrop-off Location: [Drop-off Address] \nYour driver [Driver Name] will arrive at [Time]. \nThank you for choosing [Company Name]! 🚗\n\nBest regards, \n[Your Company Name] 🚘" 
    },
    { 
        id: "10.2", 
        title: "Ride Cancellation", 
        text: "Hi [Name], \n\nWe regret to inform you that your ride has been canceled due to [Reason]. \nPlease feel free to book a new ride at your convenience. \nThank you for your understanding.\n\nBest regards, \n[Your Company Name] ❌" 
    },
    { 
        id: "10.3", 
        title: "Ride Delay", 
        text: "Dear [Name], \n\nThere is a slight delay with your ride due to [Reason]. \nYour new estimated arrival time is [Time]. \nWe apologize for the inconvenience and thank you for your patience.\n\nBest regards, \n[Your Company Name] ⏳" 
    },
    { 
        id: "10.4", 
        title: "Ride Feedback Request", 
        text: "Hi [Name], \n\nWe hope you had a pleasant ride with us! \nPlease take a moment to share your feedback about your ride experience. \nYour opinion is valuable and helps us improve. 🌟\n\nBest regards, \n[Your Company Name] 💬" 
    },
    { 
        id: "10.5", 
        title: "New Ride Available", 
        text: "Hello [Name], \n\nA new ride has become available in your area! \nYou can book a ride from [Location] to [Destination]. \nWe're ready when you are! 🚖\n\nBest regards, \n[Your Company Name] 🎉" 
    },
    { 
        id: "10.6", 
        title: "Ride Route Update", 
        text: "Dear [Name], \n\nPlease note that there has been a route update for your ride. \nYour new pick-up location is [New Location]. \nYour driver will arrive at [Time]. Thank you for your flexibility!\n\nBest regards, \n[Your Company Name] 🚗" 
    },
    { 
        id: "10.7", 
        title: "Ride Arrival Notification", 
        text: "Hi [Name], \n\nYour ride has arrived at [Pick-up Location]. \nDriver Name: [Driver Name] \nCar Model: [Car Model] \nPlease confirm your pick-up. Thank you!\n\nBest regards, \n[Your Company Name] 🚘" 
    }
]
            }
        

        
        ]
        export default data;
      
  
