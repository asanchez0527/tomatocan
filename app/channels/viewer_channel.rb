class ViewerChannel < ApplicationCable::Channel
  def subscribed
    stream_from "viewer_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
