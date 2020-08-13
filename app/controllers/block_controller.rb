class BlockController < ApplicationController
    def load
        Attendees.new(:user_id => params[:id], :room_type => params[:room], :user_name => params[:name], :user_permalink => params[:permalink]).save
        ActionCable.server.broadcast "viewer_channel", content: {type: "join", id: params[:id], room: params[:room], name: params[:name], permalink: params[:permalink]}
        head :ok
    end

    def unload
        Attendees.where(:user_id => params[:id], :room_type => params[:room]).destroy_all
        ActionCable.server.broadcast "viewer_channel", content: {type: "leave", id: params[:id], room: params[:room]}
        # # gets the current user
        # current_user = User.find_by_id(params[:user])

        # # remove the current event from user's last_viewed array
        # array = current_user.last_viewed
        # array = array - [params[:room]]
        # current_user.update({'last_viewed': array})
        # ActionCable.server.broadcast "viewer_channel", content: {user: params[:user], room: params[:room], owner: params[:owner]}
        # if params[:event] == nil || params[:event] == ""
        #   attendance_log = Attendance.find_by(user_id: params[:currentUser], time_out: nil)
        # else  
        #   attendance_log = Attendance.find_by(user_id: params[:currentUser], event_id: params[:event], time_out: nil)
        # end

        # attendance_log.time_out = Time.now - 7.hours
        # attendance_log.save

        # return 200 ok
        head :ok
    end
              

    def block
        # get person to block and owner of convo
        blocker = User.find_by_id(params[:blocker])
        blockee = User.find_by_id(params[:blockee])

        # get blockedBy array and BlockedUsers array
        array = to_block.blockedBy
        array2 = owner.BlockedUsers

        # check if user has already been blocked
        unless array2.include? (to_block.permalink)
            to_block.update({'blockedBy': array << owner.permalink})        # add owner of convo to blockedBy array
            owner.update({'BlockedUsers': array2 << to_block.permalink})    # add user to be blocked to owner's BlockedUsers array
        end

        # return 200 ok
        head :ok
    end

    def unblock
        # get to_unblock user and current_user
        to_unblock = User.find_by_id(params[:to_unblock_id])
        current_user = User.find_by_id(params[:current_user_id])

        # get blocked by array
        array = to_unblock.blockedBy

        # remove current_user from blockedBy array
        array = array - [current_user.permalink]
        to_unblock.update({'blockedBy': array})

        # get blockedUsers array
        array = current_user.BlockedUsers

        # remove to_unblock from blockedUsers array
        array = array - [to_unblock.permalink]
        current_user.update({'BlockedUsers': array})

        # return 200 ok
        head :ok
    end

    def is_blocked
        render plain: current_user.blockedBy, content_type: 'text/plain'
    end

    def loadAttendees
        # return attendees layout
        current_attendees = Attendees.where(:room_type => params[:room])
        render :json => current_attendees
        # render :json => {:success => true, :html => (render_to_string partial: "layouts/attendees")}
    end

    def liveCount
        # return live_count layout
        render :json => {:success => true, :html => (render_to_string partial: "layouts/live_count")}
    end
end
