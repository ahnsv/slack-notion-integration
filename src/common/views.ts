import { View } from "@slack/web-api";

export const modal = (payload: any) => ({
  type: "modal",
  title: {
    type: "plain_text",
    text: "노션에 메시지를 복사합니다",
  },
  callback_id: "notion-clipper",
  submit: {
    type: "plain_text",
    text: "보내기❤️",
  },
  blocks: [
    {
      block_id: "message",
      type: "input",
      element: {
        action_id: "message_id",
        type: "plain_text_input",
        multiline: true,
        initial_value: payload?.message?.text,
      },
      label: {
        type: "plain_text",
        text: "Message Text",
      },
    },
    {
      block_id: "user",
      type: "input",
      element: {
        action_id: "user_id",
        type: "users_select",
        initial_user: payload?.user_id,
      },
      label: {
        type: "plain_text",
        text: "Posted by",
      },
    },
    {
      block_id: "importance",
      type: "input",
      element: {
        action_id: "importance_id",
        type: "static_select",
        placeholder: {
          type: "plain_text",
          text: "Select importance",
          emoji: true,
        },
        options: [
          {
            text: {
              type: "plain_text",
              text: "High 💎💎✨",
              emoji: true,
            },
            value: "high",
          },
          {
            text: {
              type: "plain_text",
              text: "Medium 💎",
              emoji: true,
            },
            value: "medium",
          },
          {
            text: {
              type: "plain_text",
              text: "Low ⚪️",
              emoji: true,
            },
            value: "low",
          },
        ],
      },
      label: {
        type: "plain_text",
        text: "Importance",
      },
    },
  ],
}) as View;
